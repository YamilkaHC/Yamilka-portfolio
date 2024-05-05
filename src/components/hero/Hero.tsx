/* eslint-disable react/no-unescaped-entities */
// import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

import { EMAIL } from '@/utils/AppConfig';

import LayoutAnimateX from '../layout/LayoutAnimateX';
import LayoutAnimationY from '../layout/LayoutAnimateY';
import { Section } from '../layout/Section';

// const LayoutAnimateX = dynamic(() => import('../layout/LayoutAnimateX'), {
//   ssr: false,
// });

const Hero = () => (
  <Section yPadding=" hero-height  flex flex-col gap-1 justify-center  items-start px-8 md:px-10 lg:px-20 py-10  border border-white border-4 lg:mx-20 md:mx-16 mx-4 ">
    <LayoutAnimateX delay={0.2}>
      <h1 className="left-3 whitespace-pre-line text-3xl  font-bold  leading-[30px] text-white md:text-4xl md:leading-[45px] lg:text-6xl lg:leading-[60px]">
        Hi, I'm Yamilka Henriquez
      </h1>
    </LayoutAnimateX>

    <LayoutAnimationY delay={0.4}>
      <h2 className="font-bold  tracking-widest text-secondary-400 md:text-2xl ">
        Web Developer & Programming Teacher
      </h2>
    </LayoutAnimationY>

    <LayoutAnimationY delay={0.6}>
      <p className="max-w-[750px] text-white">
        As a dedicated programmer, I collaborate on cutting-edge digital
        projects globally. My expertise lies in crafting visually striking
        applications with efficient code. Committed to continuous improvement, I
        strive for impactful and innovative solutions.{' '}
      </p>
    </LayoutAnimationY>

    <LayoutAnimationY delay={0.8}>
      <div className="mt-10 flex flex-wrap items-center justify-start gap-2 sm:gap-3">
        <Link
          href="/assets/doc/resume.pdf"
          className=" block rounded-full bg-blue-600 px-8 py-3 font-bold tracking-widest text-white transition-all hover:bg-[#2f72de] hover:transition-all md:px-9"
          target="_blank"
          rel="noopener noreferrer"
        >
          RESUME
        </Link>

        <div className="flex h-full items-center justify-center gap-2 ">
          <Link
            href="https://www.linkedin.com/in/yamilka-henriquez-cosme-b4045314b/"
            target="_blank"
            title="https://www.linkedin.com/in/yamilka-henriquez-cosme-b4045314b/"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={27}
              className="w-[25px] text-white transition-all hover:text-[#cccccc] hover:transition-all md:mr-[-4px] md:w-[37px]"
            />
          </Link>

          <Link
            href="https://github.com/YamilkaHC"
            title="https://github.com/YamilkaHC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={27}
              className="w-[25px] text-white transition-all hover:text-[#cccccc] hover:transition-all md:w-[30px]"
            />
          </Link>

          <Link href={`mailto:${EMAIL}`}>
            <IoMdMail
              title={`${EMAIL}`}
              size={34}
              className="mb-[-4px] w-[33px] text-white transition-all hover:text-[#cccccc] hover:transition-all md:w-[37px]"
            />
          </Link>
        </div>
      </div>
    </LayoutAnimationY>
  </Section>
);

export { Hero };
