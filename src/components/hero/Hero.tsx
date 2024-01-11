/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

import LayoutAnimateX from '../layout/LayoutAnimateX';
import LayoutAnimationY from '../layout/LayoutAnimateY';
import { Section } from '../layout/Section';

const Hero = () => (
  <Section yPadding=" min-h-[80vh] mb-40 flex flex-col gap-1 justify-center  items-start px-8 md:px-10 lg:px-20 py-10  border border-white border-4 mb-5 lg:mx-20 md:mx-16 mx-4 mt-10">
    <LayoutAnimateX delay={0.2}>
      <h1 className="left-3 whitespace-pre-line text-3xl  font-bold  leading-[30px] text-white md:text-4xl md:leading-[45px] lg:text-6xl lg:leading-[60px]">
        Hi, I'm Yamilka Henriquez <br /> Web Developer & <br /> Programming
        Teacher
      </h1>
    </LayoutAnimateX>

    <LayoutAnimationY delay={0.4}>
      <h2 className="font-bold leading-loose tracking-widest text-secondary-500 md:text-xl md:leading-hero">
        WELCOME TO MY ONLINE PORTFOLIO AND CV
      </h2>
    </LayoutAnimationY>
    <LayoutAnimationY delay={0.6}>
      <p className="max-w-[750px] text-white">
        {
          " Hi there! I'm a Product Designer with over 15 years of experience. I'm passionate about owning the design process from concept to layout and front-end code and have led the design of a multitude of products. Throughout my career, I was also lucky enough to build teams and manage wonderful people."
        }
      </p>
    </LayoutAnimationY>
    <LayoutAnimationY delay={0.8}>
      <Link legacyBehavior passHref href="/assets/doc/resume.pdf">
        <a
          className="mt-5 block rounded-full bg-blue-500 px-9 py-3 font-bold tracking-widest text-white transition-all hover:bg-[#2f72de] hover:transition-all"
          target="_blank"
        >
          RESUMEN
        </a>
      </Link>
    </LayoutAnimationY>
  </Section>
);

export { Hero };
