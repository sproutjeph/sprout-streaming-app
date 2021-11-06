const fetcherFunction = async (url, genre) => {
  try {
    const request = await fetch(url);
    if (!request.ok) {
      const msg = `There was an Error '${request.status} ${request.statusText}'`;
      throw new Error(msg);
    }
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default fetcherFunction;
