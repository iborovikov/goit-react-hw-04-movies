

// const API_KEY = '6e769984a853ea1bdeede26e9a1ea504'
// const URL = 'https://api.themoviedb.org/3/movie/550?api_key='

const fetchForMovie = () => {

    return (fetch(`https://api.themoviedb.org/3/movie/76341?api_key=6e769984a853ea1bdeede26e9a1ea504`).then(res => res.json()))
    
}

export default fetchForMovie