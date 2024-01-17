import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieCard.module.css';

export const MovieCard = ({ movieInfo }) => {

    const {
        original_title,
        release_date,
        genres,
        poster_path,
        vote_average,
        overview,
    } = movieInfo;

    const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
    const defaultImg = 'https://shop.stryi-tur.info/wp-content/uploads/2022/11/161.jpg';;
    const year = release_date.split('-')[0];
    const location = useLocation();
    const backLink = useRef(location?.state?.from ?? '/');
    
    return (
        <div className={css.containerCard}>
          <Link to={backLink.current}>
            <button className={css.prevPageBtn}>GO BACK</button>
          </Link>
          <div className={css.wrapperCard}>
          <img
              className={css.imgMovie}
              src={poster_path ? `${baseImgUrl}${poster_path}` : defaultImg}
              alt={original_title}
              width="300"
            />

            <div>
              <h2>
                {original_title} ({year})
              </h2>
              <p>
                <b>User Score: </b>
                {Math.ceil(vote_average * 10)}%
              </p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <ul className={css.genresList}>
                {genres.map(({ id, name }) => {
                  return <li key={id}>{name}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
    );
}

export default MovieCard;
