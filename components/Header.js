import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
  HomeIcon,
  CollectionIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';
const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="home" Icon={HomeIcon} />
        <HeaderItem title="trending" Icon={LightningBoltIcon} />
        {/* <HeaderItem title="verified" Icon={BadgeCheckIcon} /> */}
        <HeaderItem title="collections" Icon={CollectionIcon} />
        <HeaderItem title="search" Icon={SearchIcon} />
        <HeaderItem title="account" Icon={UserIcon} />
      </div>
      <div>
        <h1 className="uppercase text-xl font-extrabold tracking-widest font-serif">
          jeph Movies
        </h1>
      </div>
    </header>
  );
};

export default Header;
