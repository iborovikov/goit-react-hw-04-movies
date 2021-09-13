import PropTypes from 'prop-types';
import s from './MovieDetails.module.css'
import { useHistory } from "react-router-dom"


const MainDetails = ({ movieDetails, prevLocation, dateNormalizer }) => {
    const history = useHistory();

    return (
        <>
            <div className={s.detailsContainer}>
                <div className={s.pictureBlock}>
                    <button type="button" onClick={() => history.push(prevLocation)}>Go back</button>
                
                    <img src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}?api_key=6e769984a853ea1bdeede26e9a1ea504`} alt={movieDetails.title} className={s.poster} />
                </div>
                <div className={s.dataBlock}>
                    <h1>{movieDetails.title} ({dateNormalizer(movieDetails.release_date)})</h1>
                    <p>User sorce: {movieDetails.vote_average * 10}%</p>
                    <h2>Overview</h2>
                    <p>{movieDetails.overview}</p>
                    <h2>Geners</h2>
                    <ul>
                        {movieDetails.genres.map(gener => {
                            return <li key={gener.id} className={s.generList}>{gener.name}</li>
                        })}
                    </ul>
                </div>
            </div>
            <hr />
        </>
    );
};

export default MainDetails

MainDetails.propTypes = {
    movieDetails: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
        release_date: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }))
    }).isRequired,
    prevLocation: PropTypes.string,
    dateNormalizer: PropTypes.func.isRequired,
};