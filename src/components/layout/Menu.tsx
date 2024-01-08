import Link from 'next/link';

import Logo from '../logo/Logo';

const Menu = () => {
  return (
    <div className="fixed bottom-0 z-10 flex h-[100px] w-full content-center items-center justify-center gap-2 border-gray-500 bg-secondary-400 px-1 md:left-0 md:h-full md:w-[100px] md:flex-col md:gap-10 md:border-r">
      <Logo />
      <nav className="flex flex-nowrap gap-2 md:flex-col md:gap-6">
        <Link
          href={'#home'}
          className="vertical-align sm:text-md text-sm font-extrabold uppercase  text-white md:rotate-180"
        >
          Home
        </Link>
        <Link
          href={'#about-me'}
          className="vertical-align sm:text-md text-sm font-extrabold uppercase text-white md:rotate-180"
        >
          About me
        </Link>
        <Link
          href={'#my-recent-work'}
          className="vertical-align sm:text-md text-sm font-extrabold uppercase text-white md:rotate-180"
        >
          My recent work
        </Link>
        <Link
          href={'#testimonials'}
          className="vertical-align sm:text-md text-sm font-extrabold uppercase text-white md:rotate-180"
        >
          Testimonials
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
