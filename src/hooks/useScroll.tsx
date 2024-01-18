import { useEffect, useState } from 'react';

const useScroll = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsScrollingDown(currentScrollPos > prevScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        window.addEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
        setIsScrollingDown(false);
      }
    };

    handleResize(); // Call on initial render

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return { isScrollingDown };
};

export default useScroll;
