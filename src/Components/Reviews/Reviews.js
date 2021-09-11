import { useParams } from "react-router-dom"
import { fetchMovieReviews } from '../Services/services'
import { useEffect, useRef } from 'react';
import ReviewList from "./ReviewList";
import NotFoundView from "../NotFoundView/NotFoundView";


const Review = ({state: {reviews, status}, dispatch}) => {

    const isFirstRender = useRef(true);
    const params = useParams()

    
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

    return (reviews[0] ? <ReviewList reviews={reviews} /> : <NotFoundView />)
    

    // return (
    //     <ReviewList reviews={reviews} />
    // );

}

export default Review