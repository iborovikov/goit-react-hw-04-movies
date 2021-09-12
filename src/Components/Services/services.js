const API_KEY = '6e769984a853ea1bdeede26e9a1ea504'
const URL = 'https://api.themoviedb.org/3/'

const firstFetch = () => {
    return (fetch(`${URL}trending/all/day?api_key=${API_KEY}&language=en-US`)
        .then(res => res.json())
        .catch(error => console.log(error))
    );
};
const fetchByMovieTitle = (title) => {
    return (
        fetch(`${URL}search/movie?api_key=${API_KEY}&query=${title}`)
            .then(res => res.json())
            .catch(error => console.log(error))
    );
};
const fetchMovieById = (id) => {
    return (
        fetch(`${URL}movie/${id}?api_key=${API_KEY}`)
            .then(res => res.json())
            .catch(error => console.log(error))
    );
};

const fetchMovieCast = (id) => {
    return (
        fetch(`${URL}movie/${id}/credits?api_key=${API_KEY}`)
            .then(res => res.json())
            .catch(error => console.log(error))
    );
};

const fetchMovieReviews = (id) => {
    return (
        fetch(`${URL}movie/${id}/reviews?api_key=${API_KEY}`)
            .then(res => res.json())
            .catch(error => console.log(error))
    );
};

export {
    firstFetch,
    fetchByMovieTitle,
    fetchMovieById,
    fetchMovieCast,
    fetchMovieReviews
};