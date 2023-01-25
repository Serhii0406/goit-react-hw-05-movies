import { useEffect, useState } from 'react';
import { getTrending } from '../Api/Api';
import { MovieItem, Main } from './Home.styled';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const [trendingList, setTrendingList] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
        async function trendingCatch() {
            try {
                const data = await getTrending();
                setTrendingList(data.data.results);
            } catch (error) {
                console.log(error);
            }
        }
        trendingCatch();
    }, []);

    return (
        <Main>
      <h1>Trending today</h1>
      <ul>
        {trendingList &&
          trendingList.map(list => (
            <li key={list.id}>
              <MovieItem to={`movies/${list.id}`} state={{ from: location }}>
                {list.original_name ?? list.original_title}
              </MovieItem>
            </li>
          ))}
      </ul>
    </Main>
  );
}

export default Home;