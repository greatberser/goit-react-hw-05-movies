import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getMovieReviews } from 'services/api';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import css from './Reviews.module.css'

export default function Reviews() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        async function getReviews() {
          setIsLoading(true);
    
          try {
            const fetchedReviews = await getMovieReviews(movieId);
            setReviews(fetchedReviews);
          } catch (error) {
            setError(error);
          } finally {
            setIsLoading(false);
          }
        }
        getReviews();
    }, [movieId]);

    return (
        <ul className={css.reviewsList}>
          {isLoading ? (
            <div>LOADING</div>
          ) : error ? (
            <div>
              <b>:{'\u0028'}</b>Something went wrong{' '}
            </div>
          ) : reviews.length > 0 ? (
            reviews.map(review => {
              const { id, author_details, content } = review;
              return (
                <ReviewItem
                  key={id}
                  author={author_details.username}
                  text={content}
                />
              );
            })
          ) : (
            <p>
              <b>There is no reviews</b>
            </p>
          )}
        </ul>
      );
}