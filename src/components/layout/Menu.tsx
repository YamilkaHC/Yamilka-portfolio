import Link from 'next/link';

import useScroll from '@/hooks/useScroll';

import Logo from '../logo/Logo';

const Menu = () => {
  const { isScrollingDown } = useScroll();

  return (
    <div
      className={` ${
        isScrollingDown ? 'scrolledDown' : 'scrolledUp'
      } fixed bottom-0 z-10 flex  h-[75px] w-full content-center items-center justify-center gap-2 border-t border-gray-500   bg-primary-500 px-1 md:left-0 md:h-full md:w-[100px] md:flex-col md:gap-10 md:border-r md:border-t-0`}
    >
      <nav className="relative flex flex-nowrap items-center justify-center gap-2 md:flex-col md:gap-6">
        <Link
          className="change-order1 mx-2 md:mx-0 md:mb-2"
          aria-label="Logo"
          href={'/'}
        >
          <Logo />
        </Link>
        <Link
          href={'#selected-work'}
          className="vertical-align change-order2 sm:text-md border-b-2  border-transparent text-xs font-extrabold uppercase tracking-wider text-white transition-all hover:border-secondary-500 hover:text-[#f0efef] hover:transition-all md:rotate-180 md:border-b-0 md:border-l-2"
        >
          My Work
        </Link>
        <Link
          href={'#resume'}
          className="vertical-align sm:text-md change-order3 border-b-2  border-transparent text-xs font-extrabold uppercase tracking-wider text-white transition-all hover:border-secondary-500 hover:text-[#f0efef] hover:transition-all md:rotate-180 md:border-b-0 md:border-l-2"
        >
          Resume
        </Link>
        <Link
          href={'#skills'}
          className="vertical-align sm:text-md change-order4 border-b-2 border-transparent text-xs font-extrabold  uppercase tracking-wider text-white transition-all hover:border-secondary-500  hover:text-[#f0efef] hover:transition-all md:rotate-180 md:border-b-0 md:border-l-2"
        >
          Skills
        </Link>
        <Link
          href={'#testimonials'}
          className="vertical-align sm:text-md change-order5 border-b-2  border-transparent text-xs font-extrabold uppercase tracking-wider text-white transition-all hover:border-secondary-500 hover:text-[#f0efef] hover:transition-all md:rotate-180 md:border-b-0 md:border-l-2"
        >
          Testimonials
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
