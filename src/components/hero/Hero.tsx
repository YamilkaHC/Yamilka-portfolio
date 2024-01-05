/* eslint-disable react/no-unescaped-entities */
import LayoutAnimationY from '../layout/LayoutAnimateY';
import { Section } from '../layout/Section';

const Hero = () => (
  <Section yPadding=" min-h-[80vh] flex flex-col gap-1 justify-center  items-start px-8 md:px-10 lg:px-20 py-10  border border-white border-4 mb-5 lg:mx-20 md:mx-16 mx-4 mt-10">
    <LayoutAnimationY delay={0.2}>
      <h1 className="left-3 whitespace-pre-line text-3xl  font-bold  leading-[30px] text-white md:text-4xl md:leading-[45px] lg:text-6xl lg:leading-[60px]">
        Hi, I'm Yamilka Henriquez <br /> Web Developer & <br /> Programming
        Teacher
      </h1>
    </LayoutAnimationY>

    <LayoutAnimationY delay={0.4}>
      <h2 className="font-bold leading-loose text-secondary-500 md:text-xl md:leading-hero">
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
      <button className="mt-10 rounded-sm bg-blue-500 px-8 py-2 font-bold text-white hover:bg-blue-700">
        RESUMEN
      </button>
    </LayoutAnimationY>
  </Section>
);

export { Hero };
