import Head from 'next/head';

interface ISEO {
  title: string;
}

export default function SEO({ title }: ISEO) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
