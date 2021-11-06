import Header from './Header';
import { useRouter } from 'next/router';
const ErrorPage = () => {
  const router = useRouter();

  const clickHandler = () => {
    router.push('/movies');
  };
  return (
    <main className="bg-hero-image bg-origin-content bg-center bg-no-repeat bg-cover h-[100vh] w-full pt-1">
      <Header />
      <div className="absolute top-[50%] right-0 left-0 bg-[#e6323266] w-[25rem] mx-auto">
        <h1 className="capitalize text-center text-xl">
          Try again your network connection is bad
        </h1>
        <button
          className="mx-auto block mt-20 bg-red-500 p-2 rounded-md text-gray-900 hover:border-2 hover:bg-transparent font-bold mb-4 animate-bounce"
          onClick={clickHandler}
        >
          Click to Refresh
        </button>
      </div>
    </main>
  );
};

export default ErrorPage;
