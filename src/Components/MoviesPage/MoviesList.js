import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const MoviesList = ({ movieList }) => {
    return (
        <ul>
            {movieList.map(film => {
                return (<li key={film.id}><Link to={`movies/${film.id}`}>{film.title}</Link></li>)
            })}
        </ul>
    );
};
export default MoviesList

MoviesList.propTypes = {
    movieList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired
};
