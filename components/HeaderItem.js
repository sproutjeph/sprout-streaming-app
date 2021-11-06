import Link from 'next/link';
const HeaderItem = ({ Icon, title }) => {
  let linkPath = '';
  if (title === 'home') {
    linkPath = '/';
  }
  if (title === 'trending') {
    linkPath = '/movies?genre=fetchTrending';
  }
  if (title === 'account') {
    linkPath = '/account';
  }
  if (title === 'collections') {
    linkPath = '/movies';
  }
  if (title === 'search') {
    linkPath = '/search';
  }

  return (
    <Link href={linkPath}>
      <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
        <Icon className="h-8 mb-1 group-hover:animate-bounce" />
        <p className="tracking-widest opacity-0 group-hover:opacity-100 uppercase">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default HeaderItem;
