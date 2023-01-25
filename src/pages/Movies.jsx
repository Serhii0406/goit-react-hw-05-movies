import { useState, useEffect } from 'react';
import { getSearchMovie } from '../Api/Api';
import { useSearchParams, useLocation } from 'react-router-dom';
import { MovieItem, Main, Form, Input, Button } from './Movies.styled';
import { toast } from 'react-toastify';

const Movies = () => {
  const [searchInput, setSearch] = useState('');
  const [filmList, setFilmList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';
  const location = useLocation();

  const handleChange = event => {
    setSearch(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams(searchInput !== '' ? { query: searchInput } : {});
    if (searchInput.trim() === '') {
      toast.warn('Enter words to search for');
      return;
    }
    movieCatch(search);
    setSearch('');
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    movieCatch(search);
  }, [search]);

  async function movieCatch(search) {
    try {
      const data = await getSearchMovie(search);
      if (data.data.total_results === 0) {
        toast.warn(`Sorry! We didn't find anything, change your request`);
        return;
      }
      setFilmList(data.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        <Input
        type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="search"
          onChange={handleChange}
          value={searchInput}>
        </Input>
        <Button type="submit">Search</Button>
      </Form>
      <ul>
        {filmList &&
          filmList.map(film => (
            <li key={film.id}>
              <MovieItem to={`${film.id}`} state={{ from: location }}>
                {film.original_name ?? film.original_title}
              </MovieItem>
            </li>
          ))}
      </ul>
    </Main>
  );
};

export default Movies;