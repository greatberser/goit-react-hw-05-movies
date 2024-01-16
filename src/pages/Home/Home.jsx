import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { getTrending } from 'services/api';
import { useEffect, useState } from 'react';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setIsLoading(true);
        const response = await getTrending();
        setMovies(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getTrendingMovies();
  }, []);

  return isLoading ? (
      <Loader />
    ) : error ? (
    <div>
      <b>:{'\u0028'}</b>Something went wrong{' '}
    </div>
  ) : (
    <MovieList movies={movies} />
  );
}