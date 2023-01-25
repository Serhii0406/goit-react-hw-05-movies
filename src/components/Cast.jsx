import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../Api/Api';
import { Img, Item, Span } from './Cast.styled';

const Cast = () => {
  const [castInformation, setCastInformation] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function creditsCatch() {
      try {
        const data = await getMovieCredits(id);
        setCastInformation(data.data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    creditsCatch();
  }, [id]);

  return (
    <ul>
      {castInformation &&
        castInformation.map(cast => (
          <Item key={cast.credit_id}>
            {cast.profile_path && (
              <Img
                src={`https://www.themoviedb.org/t/p/original${cast.profile_path}`}
                alt=""
              />
            )}
            <p>{cast.name}</p>
            <p>
              Character:
              <Span>{cast.character}</Span>
            </p>
          </Item>
        ))}
    </ul>
  );
};

export default Cast;