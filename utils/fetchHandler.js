import useSWR from 'swr';

const fetcherFunction = async (url, genre) => {
  const request = await fetch(url);
  if (!request.ok) {
    console.log('network Error');
  }
  const response = await request.json();
  return response;
};

export default fetcherFunction;
