import { ReactElement } from 'react';
import Navbar from './Navbar';

interface ILayout {
  children: ReactElement[];
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
