import SEO, { ISEO } from '../../components/SEO';

interface IParams {
  params: [id: string, title: ISEO];
}

export default function Detail({ params }: IParams) {
  const [title] = params || [];
  console.log(params);
  return (
    <div>
      <SEO page_title={title} />
      <h4>{title}</h4>
    </div>
  );
}

interface IServerSideProps {
  params: {
    params: object;
  };
}

export function getServerSideProps({ params: { params } }: IServerSideProps) {
  return {
    props: {
      params,
    },
  };
}
