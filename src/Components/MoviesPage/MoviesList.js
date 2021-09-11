import { Link } from "react-router-dom"

const MoviesList = ({ movieList }) => {
    return (
        <ul>
            {movieList.map(film => {
                return (<li key={film.id}><Link to={`movies/${film.id}`}>{film.title}</Link></li>)
            })}
        </ul>
    );

}
export default MoviesList
