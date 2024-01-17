import { getByQuery } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movie() {
    const [movie, setMovie] = useState([]); 
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [params, setParams] = useSearchParams();
    const query = params.get('query') ?? '';
  
    const handleSubmit = searchQuery => {
      setParams({ query: searchQuery });
    };

    useEffect(() => {
        async function getMoviesByQuery() {
          try {
            if (query.trim() !== '') {
              setIsLoading(true);
              const response = await getByQuery(query);
              setMovie(response);
            }
          } catch (error) {
            setError(error);
          } finally {
            setIsLoading(false);
          }
        }
        getMoviesByQuery();
    }, [query]);

    return (
      <>
        <SearchBar onSubmit={handleSubmit} />
        {isLoading && <Loader />}
        {error && (
          <div>
            <b>:{'\u0028'}</b>Something went wrong{''}
          </div>
        )}
          <MovieList movies={movie} />
      </>
    );
    
}