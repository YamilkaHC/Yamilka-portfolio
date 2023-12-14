import Logo from '../logo/Logo';

const Menu = () => {
  return (
    <div className="fixed left-0 top-0 flex h-full w-[100px] flex-col content-center items-center justify-center gap-10 border-r border-gray-500 bg-secondary-500 px-2">
      <Logo />
      <nav className="flex flex-col flex-nowrap gap-6">
        <div
          style={{ writingMode: 'vertical-lr' }}
          className="text-md rotate-180 font-extrabold  uppercase text-white"
        >
          Home{' '}
        </div>
        <div
          style={{ writingMode: 'vertical-lr' }}
          className="text-md rotate-180 font-extrabold uppercase text-white"
        >
          About me
        </div>
        <div
          style={{ writingMode: 'vertical-lr' }}
          className="text-md rotate-180 font-extrabold uppercase text-white"
        >
          My recent work
        </div>
        <div
          style={{ writingMode: 'vertical-lr' }}
          className="text-md rotate-180 font-extrabold uppercase text-white"
        >
          Testimonials
        </div>
      </nav>
    </div>
  );
};

export default Menu;
