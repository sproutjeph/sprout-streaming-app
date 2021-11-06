import Banner from '../components/Banner';
import Header from '../components/Header';
export default function Home() {
  return (
    <>
      <main className="bg-hero-image bg-origin-content bg-center bg-no-repeat bg-cover h-[100vh] w-full pt-1">
        <Header />
        <Banner />
      </main>
    </>
  );
}
