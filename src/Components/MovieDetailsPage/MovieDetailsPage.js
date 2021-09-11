import { useParams, Link } from "react-router-dom"
import { useEffect, useRef } from 'react';
import { fetchMovieById } from "../Services/services"
import MainDetails from "./MainDetails";


const MovieDetailsPage = ({state: { status, movieDetails }, dispatch}) => {
    const params = useParams();
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            dispatch({type:'setStatus', payload: 'pending'})
            fetchMovieById(params.movieId)
                .then(movie => {
                    dispatch({type: 'setMovieDetails', payload: movie})
                    dispatch({type:'setStatus', payload: 'resolved'})
                }).catch(error => { console.log(error) });
            isFirstRender.current = false
            return
        };
    })

    const dateNormalizer = (date) => {
      return  date.substring(0, 4)
    }



    return (movieDetails && <>
        
        <MainDetails movieDetails={movieDetails} dateNormalizer={dateNormalizer} />
        <h3>Aditional information</h3>
        <ul>
            <li><Link to={`/movies/${params.movieId}/Cast`}>Cast</Link></li>
            <li><Link to={`/movies/${params.movieId}/Reviews`}>Reviws</Link></li>
        </ul>
        
         <hr />
        </>
    )


}

export default MovieDetailsPage;