import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w200';
  const defaultImg = 'https://placehold.jp/300x450.png';
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {Array.isArray(movies) && movies.length > 0 && movies.map(({ poster_path, original_title, id }) => (
        <li className={css.itemMovie} key={id}>
          <Link className={css.movieLink} to={`/movies/${id}`} state={{ from: location }}>
            <img
              width="300"
              className={css.imgMovie}
              src={poster_path ? `${baseImgUrl}${poster_path}` : defaultImg}
              alt={original_title}
            />
            <p className={css.titleMovie}>{original_title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
