import Link from 'next/link';
const Banner = () => {
  return (
    <div className=" bg-[#e6323266] h-60 w-[80%] text-center mx-auto rounded-md py-2 max-w-[35rem] mt-56">
      <h1 className="uppercase text-4xl font-sans font-extrabold tracking-widest sm:text-5xl sm:font-black lg:text-6xl mb-1 text-gray-300">
        Jeph Movies
      </h1>
      <Link href="/account">
        <button className="uppercase bg-[rgba(230,50,50,0.6)] rounded-lg p-3 font-bold my-6 hover:border-2 hover:bg-transparent shadow-lg">
          sign up / login
        </button>
      </Link>
      <p className="capitalize text-lg font-semibold tracking-wide sm:text-2xl lg:text-3xl text-gray-400">
        to Catch all the latest movies
      </p>
    </div>
  );
};

export default Banner;
