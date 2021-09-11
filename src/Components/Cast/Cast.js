import { useParams } from "react-router-dom"
import { fetchMovieCast } from '../Services/services'
import { useEffect, useRef } from 'react';


const Cast = ({state: {cast, status}, dispatch}) => {

    const isFirstRender = useRef(true);
    const params = useParams()

    
    useEffect(() => {
        if (isFirstRender.current) {
            dispatch({type:'setStatus', payload: 'pending'})
            fetchMovieCast(params.movieId)
                .then(movie => {
                    dispatch({type: 'setCast', payload: movie.cast})
                    dispatch({type:'setStatus', payload: 'resolved'})
                }).catch(error => { console.log(error) });
            isFirstRender.current = false
            return
        };
})

    return (
        <ul>
            {cast.map(details => {
                return <li key={details.id}>
                    <h4>{details.character}: {details.name}</h4>
                    <img src={`https://image.tmdb.org/t/p/w300${details.profile_path}?api_key=6e769984a853ea1bdeede26e9a1ea504`} alt={`${details.name}`} />
                  
                    
                </li>
            })}
        </ul>
    );
}

export default Cast