import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Result from '../components/Result';
import requests from '../utils/requests';
export default function Home({ results }) {
  return (
    <div className="">
      <Head>
        <title>Hulu clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Result results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const url = `https://api.themoviedb.org/3${
    requests[genre]?.url || requests.fetchActionMovies.url
  }`;

  const request = await fetch(url);

  const response = await request.json();

  return {
    props: {
      results: response.results,
    },
  };
}
