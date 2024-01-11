import Link from 'next/link';

import Logo from '../logo/Logo';

const Menu = () => {
  return (
    <div className="fixed bottom-0 z-10 flex h-[100px] w-full content-center items-center justify-center gap-2 border-gray-500 bg-primary-500  px-1 md:left-0 md:h-full md:w-[100px] md:flex-col md:gap-10 md:border-r">
      <Logo />
      <nav className="flex flex-nowrap gap-2 md:flex-col md:gap-6">
        <Link
          href={'#about-me'}
          className="vertical-align sm:text-md border-l-2 border-transparent text-xs font-extrabold uppercase tracking-wider text-white transition-all hover:border-secondary-500 hover:text-[#f0efef] hover:transition-all md:rotate-180"
        >
          About me
        </Link>
        <Link
          href={'#selected-work'}
          className="vertical-align sm:text-md border-l-2 border-transparent text-xs font-extrabold uppercase tracking-wider text-white transition-all hover:border-secondary-500 hover:text-[#f0efef] hover:transition-all md:rotate-180"
        >
          My Work
        </Link>
        <Link
          href={'#skills'}
          className="vertical-align sm:text-md border-l-2 border-transparent  text-xs font-extrabold uppercase tracking-wider text-white  transition-all hover:border-secondary-500 hover:text-[#f0efef] hover:transition-all md:rotate-180"
        >
          Skills
        </Link>
        <Link
          href={'#testimonials'}
          className="vertical-align sm:text-md border-l-2 border-transparent text-xs font-extrabold uppercase tracking-wider text-white transition-all hover:border-secondary-500 hover:text-[#f0efef] hover:transition-all md:rotate-180"
        >
          Testimonials
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
