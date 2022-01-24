import { useEffect, useState } from 'react';
import SEO from '../components/SEO';

const API_KEY = '5efe6813c047c5a28d580b92e30a6262';

interface IMovieData {
  id: string;
  original_title: string;
}

export default function Home() {
  const [movies, setMovies] = useState<IMovieData[]>([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <SEO title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie: IMovieData) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
