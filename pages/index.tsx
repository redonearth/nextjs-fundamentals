import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SEO from '../components/SEO';

interface MovieProps {
  results?: IMovieData[];
}

interface IMovieData {
  id: string;
  original_title: string;
  poster_path: string;
}

export default function Home({ results }: MovieProps) {
  const router = useRouter();
  const onClick = (id: string, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div className="container">
      <SEO page_title="Home" />
      {results?.map((movie: IMovieData) => (
        <div
          className="movie"
          onClick={() => onClick(movie.id, movie.original_title)}
          key={movie.id}
        >
          <div className="poster">
            <Image
              layout="fill"
              objectFit="cover"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.original_title} Poster`}
            />
          </div>
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
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
          cursor: pointer;

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

export async function getServerSideProps() {
  const { results } = await (
    await fetch('http://localhost:3000/api/movies')
  ).json();
  return {
    props: {
      results,
    },
  };
}
