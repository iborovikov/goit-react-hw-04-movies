import PropTypes from 'prop-types'
import { useParams } from "react-router-dom"
import { useEffect, useRef } from 'react'
import { fetchMovieReviews } from '../Services/services'
import ReviewList from "./ReviewList"
import NotFoundView from "../NotFoundView/NotFoundView"


const Review = ({state: {reviews, status}, dispatch}) => {

    const isFirstRender = useRef(true);
    const params = useParams();
    
    useEffect(() => {
        if (isFirstRender.current) {
            dispatch({type:'setStatus', payload: 'pending'})
            fetchMovieReviews(params.movieId)
                .then(review => {
                    dispatch({type: 'setReviews', payload: review.results})
                    dispatch({type:'setStatus', payload: 'resolved'})
                }).catch(error => { console.log(error) });
            isFirstRender.current = false
            return
        };
    })

    if (status === 'idle' || status === 'pending') {
        return (<p>Loading...</p>)
    };
    if (status === 'resolved') {
        return (reviews[0] ? <ReviewList reviews={reviews} /> : <NotFoundView />)
    };
}

export default Review

Review.propTypes = {
    state: PropTypes.shape({
        status: PropTypes.string.isRequired,
        reviews: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })).isRequired
    }),
    dispatch: PropTypes.func.isRequired,
};