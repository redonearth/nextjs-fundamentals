import Head from 'next/head';

export interface ISEO {
  page_title: string;
}

export default function SEO({ page_title }: ISEO) {
  return (
    <Head>
      <title>{page_title} | Next Movies</title>
    </Head>
  );
}
