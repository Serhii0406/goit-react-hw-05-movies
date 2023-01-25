import { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getDetailMovie } from '../Api/Api';
import {
  Main,
  GoBackLink,
  Img,
  FilmCard,
  Title,
  TitleItem,
  LinkAbout,
  List,
} from './MovieDetails.styled';
import { BiArrowBack } from 'react-icons/bi';

const MovieDetails = () => {
  const [movieInformation, setMovieInformation] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function trendingCatch() {
      try {
        const data = await getDetailMovie(id);
        setMovieInformation(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    trendingCatch();
  }, [id]);

  function findGenresOfMovie(all) {
    let movieGenres = all.map(one => Object.values(one.name).join(''));
    return movieGenres.join(', ');
  }

  return (
    <Main>
      {movieInformation && (
        <div key={movieInformation.id}>
          <GoBackLink to={backLinkHref}>
            <BiArrowBack size={18} />
            Go back
          </GoBackLink>
          <FilmCard>
            <Img
              src={`https://image.tmdb.org/t/p/w400${movieInformation.poster_path}`}
              alt=""
            />
            <div>
              <Title>
                {movieInformation.title ?? movieInformation.original_title}(
                {movieInformation.release_date.slice(0, 4) ?? ''})
              </Title>
              <p>
                User score:
                {Math.round(movieInformation.vote_average * 10) ?? ''}%
              </p>
              <TitleItem>Overview</TitleItem>
              <p>{movieInformation.overview}</p>
              <TitleItem>Genres</TitleItem>
              <p>{findGenresOfMovie(movieInformation.genres)}</p>
            </div>
          </FilmCard>
        </div>
      )}
      <TitleItem>Additional information</TitleItem>
      <List>
        <li>
          <LinkAbout to="cast" state={{ from: backLinkHref }}>
            Cast
          </LinkAbout>
        </li>
        <li>
          <LinkAbout to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </LinkAbout>
        </li>
      </List>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Main>
  );
};

export default MovieDetails;