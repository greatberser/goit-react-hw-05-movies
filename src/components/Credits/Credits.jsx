import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getMovieCredits } from 'services/api';
import css from './Credits.module.css';

export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getCreditsByMovie() {
        try {
            setIsLoading(true);
            const response = await getMovieCredits(movieId);
            setCast(response);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
        }
        getCreditsByMovie();
    }, [movieId]);

    const baseImgUrl = 'https://image.tmdb.org/t/p/w200';

    return isLoading ? (
        <div>LOADING</div>
      ) : error ? (
        <div>
          <b>:{'\u0028'}</b>Something went wrong{' '}
        </div>
      ) : (
        <ul className={css.creditsList}>
          {cast.map(({ character, id, name, profile_path }) => (
            <li className={css.creditsItem} key={id}>
              <img
                width="300"
                src={`${baseImgUrl}${profile_path}`}
                alt="original_name"
              />
              <p>{character}</p>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      );
      
}