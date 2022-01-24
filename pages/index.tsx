import Image from 'next/image';
import { useEffect, useState } from 'react';
import SEO from '../components/SEO';

const API_KEY = '5efe6813c047c5a28d580b92e30a6262';

interface IMovieData {
  id: string;
  original_title: string;
  poster_path: string;
}

export default function Home() {
  const [movies, setMovies] = useState<IMovieData[]>([]);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch('/api/movies')).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div className="container">
      <SEO title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie: IMovieData) => (
        <div className="movie" key={movie.id}>
          <div className="poster">
            <Image
              layout="fill"
              objectFit="cover"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`${movie.original_title} Poster`}
            />
          </div>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          &:hover {
            .poster {
              transform: scale(1.05) translateY(-10px);
            }
          }
          .poster {
            position: relative;
            width: 230px;
            height: 345px;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            transition: transform 0.2s ease-in-out;
          }
          h4 {
            font-size: 18px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
