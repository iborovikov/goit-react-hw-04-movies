import PropTypes from 'prop-types'
import { useState, useEffect, useRef } from 'react'
import { fetchByMovieTitle } from "../Services/services"
import MoviesPageForm from './MoviesPageForm'
import MoviesList from './MoviesList'

const MoviesPage = ({ state: { status, movieList }, dispatch }) => {

    const [inputText, setInputText] = useState('');
    const [movieTitle, setMovieTitle] = useState('');
    
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        };
        dispatch({ type: 'setStatus', payload: 'pending' });
        fetchByMovieTitle(movieTitle).then(movie => {
            dispatch({ type: 'setMovieList', payload: movie.results });
            dispatch({ type: 'setStatus', payload: 'resolved' });
        })
            .catch(error => {
                dispatch({ type: 'setStatus', payload: 'rejected' });
                console.log(error)
            });
        
    }, [movieTitle, dispatch]);

    const onSubmit = (e) => {
        e.preventDefault();
        setMovieTitle(inputText);
    };

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    if (status === 'idle') {
        return (
            <MoviesPageForm onSubmit={onSubmit} handleInputChange={handleInputChange} inputText={inputText} />
        );
    };
    if (status === 'pending') {
        return <p>Loading...</p>
    };
    if (status === 'resolved') {
        return (
            <>
                <MoviesPageForm onSubmit={onSubmit} handleInputChange={handleInputChange} inputText={inputText} />
                <MoviesList movieList={movieList} dispatch={ dispatch }/>
            </>
        );
    };
    if (status === 'rejected') {
        <h2>Ничего не найдено :( </h2>
    };
};
export default MoviesPage

MoviesPage.propTypes = {
    state: PropTypes.shape({
        status: PropTypes.string.isRequired,
        movieList: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })).isRequired
    }),
    dispatch: PropTypes.func.isRequired,
};