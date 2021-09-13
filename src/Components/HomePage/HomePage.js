import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom"
import { firstFetch } from "../Services/services"
import s from './HomePage.module.css'

const HomePage = ({ state: { popMovies, prevLocation }, dispatch }) => {
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            dispatch({ type: 'setStatus', payload: 'pending' });
            firstFetch().then(movie => {
                dispatch({ type: 'setPopMovies', payload: movie.results });
                dispatch({ type: 'setStatus', payload: 'resolved' });
            })
                .catch(error => { console.log(error) });
            isFirstRender.current = false
            return
        };
    });

    return (
        <>
            <h1>Trending today</h1>
            <ul className={s.firstRenderList}>
                {popMovies.map((movie) => {
                    if (movie.title) {
                        return (<li key={movie.id} ><Link to={`movies/${movie.id}`} onClick={() => dispatch({ type: 'setPrevLocation', payload: `/` })} className={s.link}>{movie.title}</Link></li>)
                    };
                    return (<li key={movie.id} className={s.link}>{movie.name} (No details)</li>)
                })}
            </ul>
        </>
    )
}

export default HomePage;

HomePage.propTypes = {
    state: PropTypes.shape({
        popMovies: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
            name: PropTypes.string,
        })),
        prevLocation: PropTypes.string,
    }),
    dispatch: PropTypes.func.isRequired,
};