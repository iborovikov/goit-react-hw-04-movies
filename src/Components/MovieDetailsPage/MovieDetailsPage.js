import PropTypes from 'prop-types'
import { useParams, Link } from "react-router-dom"
import { useEffect, useRef } from 'react'
import { fetchMovieById } from "../Services/services"
import MainDetails from "./MainDetails"

const MovieDetailsPage = ({ state: { status, movieDetails, prevLocation }, dispatch }) => {
    const params = useParams();
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            dispatch({ type: 'setStatus', payload: 'pending' })
            fetchMovieById(params.movieId)
                .then(movie => {
                    dispatch({ type: 'setMovieDetails', payload: movie })
                    dispatch({ type: 'setStatus', payload: 'resolved' })
                }).catch(error => { console.log(error) });
            isFirstRender.current = false
            return
        };
    });

    const dateNormalizer = (date) => {
        return date.substring(0, 4)
    };

    return (movieDetails && <>
        <MainDetails movieDetails={movieDetails} prevLocation={prevLocation} dateNormalizer={dateNormalizer} />
        <h3>Aditional information</h3>
        <ul>
            <li><Link to={`/movies/${params.movieId}/Cast`}>Cast</Link></li>
            <li><Link to={`/movies/${params.movieId}/Reviews`}>Reviws</Link></li>
        </ul>
        <hr />
    </>
    );
};

export default MovieDetailsPage;

MovieDetailsPage.propTypes = {
    state: PropTypes.shape({
        status: PropTypes.string.isRequired,
        movieDetails: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string,
            release_date: PropTypes.string.isRequired,
            vote_average: PropTypes.number.isRequired,
            overview: PropTypes.string.isRequired,
            genres: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
            }))
        }),
        prevLocation: PropTypes.string,
    }),
    dispatch: PropTypes.func.isRequired,
};