import Logo from '../logo/Logo';

const Menu = () => {
  return (
    <div className="fixed bottom-0 flex h-[100px] w-full content-center items-center justify-center gap-2 border-gray-500 bg-secondary-500 px-1 md:left-0 md:h-full md:w-[100px] md:flex-col md:gap-10 md:border-r">
      <Logo />
      <nav className="flex flex-nowrap gap-2 md:flex-col md:gap-6">
        <div className="vertical-align sm:text-md text-sm font-extrabold uppercase  text-white md:rotate-180">
          Home{' '}
        </div>
        <div className="vertical-align sm:text-md text-sm font-extrabold uppercase text-white md:rotate-180">
          About me
        </div>
        <div className="vertical-align sm:text-md text-sm font-extrabold uppercase text-white md:rotate-180">
          My recent work
        </div>
        <div className="vertical-align sm:text-md text-sm font-extrabold uppercase text-white md:rotate-180">
          Testimonials
        </div>
      </nav>
    </div>
  );
};

export default Menu;
