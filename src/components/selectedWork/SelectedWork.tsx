import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { PiHandSwipeLeftFill } from 'react-icons/pi';
import ScrollContainer from 'react-indiana-drag-scroll';

import useIsMobile from '@/hooks/useIsMobileDevice';

import LayoutAnimateY from '../layout/LayoutAnimateY';
import TitleSection from '../titleSection/TitleSection';

type SelectedWorkProps = {
  title: string;
  description: string;
  url?: string;
  images: Array<{ alt: string; url: string }>;
};

const SelectedWork = () => {
  const works: Array<SelectedWorkProps> = [
    {
      title: 'OGTIC - "Salones de conferencias"',
      description:
        'Application that seeks to manage hourly reservations for conference rooms at the OGTIC. Allowed users can create meetings in rooms (depending on their permissions), create meeting minutes, generate attendance lists, among other functions.',
      url: '',
      images: [
        { alt: '', url: '/assets/images/works/ogtic/ogtic1.png' },
        { alt: '', url: '/assets/images/works/ogtic/ogtic2.png' },
        { alt: '', url: '/assets/images/works/ogtic/ogtic3.png' },
        { alt: '', url: '/assets/images/works/ogtic/ogtic4.png' },
        { alt: '', url: '/assets/images/works/ogtic/ogtic5.png' },
        { alt: '', url: '/assets/images/works/ogtic/ogtic6.png' },
      ],
    },
    {
      title: 'OGTIC - "Beca tu futuro"',
      description:
        'Scholarship your future, a platform that concentrates all scholarship opportunities in one place. Here the scholarships will be documented and managed from their publication to their application.',
      url: '',
      images: [
        { alt: '', url: '/assets/images/works/becas/becas1.png' },
        { alt: '', url: '/assets/images/works/becas/becas2.png' },
        { alt: '', url: '/assets/images/works/becas/becas3.png' },
        { alt: '', url: '/assets/images/works/becas/becas4.png' },
        { alt: '', url: '/assets/images/works/becas/becas5.png' },
        { alt: '', url: '/assets/images/works/becas/becas6.png' },
      ],
    },
    {
      title: '"Pokedux"',
      description:
        'Is a personal project for Pokemon enthusiasts to filter, search, and save favorites with detailed descriptions. Explore and create your personal Pokedex with this user-friendly tool.',
      url: 'https://redux-course-puce.vercel.app',
      images: [
        { alt: '', url: '/assets/images/works/pokedux/pokedux1.png' },
        { alt: '', url: '/assets/images/works/pokedux/pokedux2.png' },
        { alt: '', url: '/assets/images/works/pokedux/pokedux3.png' },
        { alt: '', url: '/assets/images/works/pokedux/pokedux4.png' },
      ],
    },
  ];

  const isMobile = useIsMobile();
  const [onClick, setOnClick] = useState(false);

  return (
    <div id="selected-work" className=" mt-24 flex  flex-col justify-center  ">
      <TitleSection title="Selected Work" />
      {works.map((currentWork, index) => (
        <div key={`work-${index}`} className=" mb-24">
          <LayoutAnimateY delay={0.2}>
            <ScrollContainer className="hide-scrollbar relative flex w-full gap-4  overflow-x-scroll">
              <PiHandSwipeLeftFill
                size={35}
                className={`${
                  isMobile ? 'translate-hand md:hidden' : 'hidden'
                } ${
                  onClick && 'hidden'
                } absolute bottom-5 left-10 z-10 text-secondary-500 `}
              />
              {currentWork.images.map((image, index2) => (
                <Image
                  onClick={() => setOnClick(true)}
                  onTouchStart={() => setOnClick(true)}
                  key={`image-${index2}`}
                  src={image.url}
                  alt={image.alt}
                  height={450}
                  width={675}
                  className="max-h-[200px] max-w-[400px] sm:max-h-[300px] sm:max-w-[500px] md:max-h-[450px] md:max-w-[675px]"
                />
              ))}
            </ScrollContainer>
          </LayoutAnimateY>
          <div className="mx-4  mt-10 md:mx-16  lg:mx-20">
            <h3 className="space-x-16 text-xl font-extrabold uppercase  text-secondary-500">
              {currentWork.title}
            </h3>
            <p className="max-w-[450px] text-white">
              {currentWork.description}
            </p>
            {currentWork?.url && (
              <Link legacyBehavior passHref href={currentWork?.url}>
                <a
                  className="mt-4 flex items-center gap-2 text-sm font-extrabold uppercase text-blue-500 transition-all hover:text-[#2f72de] hover:transition-all"
                  target="_blank"
                >
                  Go to this project <FaArrowRight />
                </a>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedWork;
