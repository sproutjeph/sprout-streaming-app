import { getSession } from 'next-auth/client';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import Result from '../components/Result';
import fetcherFunction from '../utils/fetchHandler';
import requests from '../utils/requests';

function Movies({ results }) {
  return (
    <Layout>
      <Nav />
      <Result results={results} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  //authentication
  const session = await getSession({ req: context.req });
  const genre = context.query.genre;
  const url = `https://api.themoviedb.org/3${
    requests[genre]?.url || requests.fetchActionMovies.url
  }`;

  const response = await fetcherFunction(url, genre);

  if (!response) {
    return {
      notFound: true,
    };
  }

  //authentication
  if (!session) {
    return {
      redirect: {
        destination: '/account',
        permanent: false,
      },
    };
  }
  return {
    props: {
      results: response.results,
    },
  };
}

export default Movies;
