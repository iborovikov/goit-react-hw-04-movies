import { fetchByMovieTitle } from "../Services/services"
import { useState, useEffect, useRef } from 'react'
import MoviesPageForm from './MoviesPageForm'
import MoviesList from './MoviesList'

const MoviesPage = ({ state: { status, movieList }, dispatch }) => {

    const [inputText, setInputText] = useState('');
    const [movieTitle, setMovieTitle] = useState('');
    
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            dispatch({ type: 'resetDetailsData' });
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
        
    }, [movieTitle, dispatch])

    

    const onSubmit = (e) => {
        e.preventDefault();
        setMovieTitle(inputText);
    }

    const handleInputChange = (e) => {
        setInputText(e.target.value)

    }
    

    if (status === 'idle') {
        return (
            <MoviesPageForm onSubmit={onSubmit} handleInputChange={handleInputChange} inputText={inputText} />
        );
    };
    if (status === 'pending') {
        return <p>Загрузка...</p>
    };
    if (status === 'resolved') {
        return (
            <>
                <MoviesPageForm onSubmit={onSubmit} handleInputChange={handleInputChange} inputText={inputText} />
                <MoviesList movieList={movieList} />
            </>
        );
    };
    if (status === 'rejected') {
        <h2>Ничего не найдено :( </h2>
    };
};
export default MoviesPage