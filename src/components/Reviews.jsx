import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../Api/Api';
import { Item } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function reviewsCatch() {
      try {
        const data = await getMovieReviews(id);
        setMovieReviews(data.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    reviewsCatch();
  }, [id]);

  return (
    <ul>
      {movieReviews && movieReviews.length > 0 ? (
        movieReviews.map(review => (
          <Item key={review.id}>
            <h3> Author: {review.author}</h3>
            <p>{review.content}</p>
          </Item>
        ))
      ) : (
        <p>Sorry! We don`t have any reviews for this movie</p>
      )}
    </ul>
  );
};

export default Reviews;