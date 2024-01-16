import { getMovieDetails } from 'services/api';
import { MovieCard } from 'components/MovieCard/MovieCard'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import css from './MovieDetails.module.css'

export default function MovieDetails() {
    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getMovieOfDetails() {
          try {
            setIsLoading(true);
            const response = await getMovieDetails(movieId);
            setMovieInfo(response);
          } catch (error) {
            setError(error);
          } finally {
            setIsLoading(false);
          }
        }
        getMovieOfDetails();
      }, [movieId]);

      return (
        isLoading ? (
          <div>LOADING</div>
        ) : error ? (
          <div>
            <b>:{'\u0028'}</b>Something went wrong{' '}
          </div>
        ) : (
          <div className={css.container}>
            {movieInfo && <MovieCard movieInfo={movieInfo} />}
            <div className={css.secInfoContainer}>
              <h2 className={css.secInfoTitle}>Additional information</h2>
              <ul className={css.secInfo}>
                  <li>
                    <NavLink className={css.itemInfo} to={'Credits'}>Credits</NavLink>
                  </li>
                  <li>
                    <NavLink className={css.itemInfo} to={'Reviews'}>Reviews</NavLink>
                  </li>
              </ul>
            </div>
            <Outlet />
          </div>
        )
      );      
}