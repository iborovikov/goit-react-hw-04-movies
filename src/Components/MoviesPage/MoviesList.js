import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const MoviesList = ({ movieList, dispatch }) => {
    return (
        <ul>
            {movieList.map(film => {
                return (<li key={film.id}><Link to={`movies/${film.id}`} onClick={() => dispatch({ type: 'setPrevLocation', payload: `/movies` })}>{film.title}</Link></li>)
            })}
        </ul>
    );
};
export default MoviesList

MoviesList.propTypes = {
    movieList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
    dispatch: PropTypes.func.isRequired,
};
