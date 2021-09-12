import PropTypes from 'prop-types';
import { useParams } from "react-router-dom"
import { useEffect, useRef } from 'react';
import { fetchMovieCast } from '../Services/services'

const Cast = ({ state: { cast, status }, dispatch }) => {

    const isFirstRender = useRef(true);
    const params = useParams();

    
    useEffect(() => {
        if (isFirstRender.current) {
            dispatch({ type: 'setStatus', payload: 'pending' })
            fetchMovieCast(params.movieId)
                .then(movie => {
                    dispatch({ type: 'setCast', payload: movie.cast })
                    dispatch({ type: 'setStatus', payload: 'resolved' })
                }).catch(error => { console.log(error) });
            isFirstRender.current = false
            return
        };
    });

    return (
        <ul>
            {cast.map(details => {
                return <li key={details.id}>
                    <h4>{details.character}: {details.name}</h4>
                    {details.profile_path ?
                        <img src={`https://image.tmdb.org/t/p/w300${details.profile_path}?api_key=6e769984a853ea1bdeede26e9a1ea504`} alt={`${details.name}`} /> :
                        <img src="http://valser-ukraine.com.ua/wp-content/uploads/2019/10/net-foto-300x300.png" alt={`${details.name}`} />
                    }
                </li>
            })}
        </ul>
    );
};

export default Cast;

Cast.propTypes = {
    state: PropTypes.shape({
        cast: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            character: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            profile_path: PropTypes.string,
        })),
        status: PropTypes.string.isRequired
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
}