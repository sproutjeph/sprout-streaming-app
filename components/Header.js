import { signOut } from 'next-auth/client';
import HeaderItem from './HeaderItem';
import {
  HomeIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
  LogoutIcon,
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';
const Header = () => {
  const router = useRouter();
  const signoutHandler = () => {
    signOut();
    router.push('/account');
  };
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="home" Icon={HomeIcon} />
        <HeaderItem title="trending" Icon={LightningBoltIcon} />
        <HeaderItem title="collections" Icon={CollectionIcon} />
        <HeaderItem title="search" Icon={SearchIcon} />
        <HeaderItem title="account" Icon={UserIcon} />
        <HeaderItem
          title="signout"
          Icon={LogoutIcon}
          onClick={signoutHandler}
        />
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
