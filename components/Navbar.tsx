import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  return (
    <nav>
      <Image src="/vercel.svg" width={100} height={40} alt="Logo" />
      <div>
        <Link href="/">
          <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: crimson;
        }
      `}</style>
    </nav>
  );
}
