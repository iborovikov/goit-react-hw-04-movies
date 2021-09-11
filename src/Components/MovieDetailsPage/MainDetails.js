import s from './MovieDetails.module.css'
import { Link } from "react-router-dom"


const MainDetails = ({ movieDetails, dateNormalizer }) => {

    const backToSerch = () => {
        
    }



    return (
        <>
            <div className={s.detailsContainer}>
                <div className={s.pictureBlock}>
                <Link to={'/'}><button type="button" onClick={backToSerch}>Go back</button></Link>
                
                <img src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}?api_key=6e769984a853ea1bdeede26e9a1ea504`} alt={movieDetails.title} className={s.poster}/>
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
}

export default MainDetails