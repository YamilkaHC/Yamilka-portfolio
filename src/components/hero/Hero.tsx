/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

import LayoutAnimateX from '../layout/LayoutAnimateX';
import LayoutAnimationY from '../layout/LayoutAnimateY';
import { Section } from '../layout/Section';

const Hero = () => (
  <Section yPadding=" min-h-[80vh]  flex flex-col gap-1 justify-center  items-start px-8 md:px-10 lg:px-20 py-10  border border-white border-4 mb-5 lg:mx-20 md:mx-16 mx-4 mt-10">
    <LayoutAnimateX delay={0.2}>
      <h1 className="left-3 whitespace-pre-line text-3xl  font-bold  leading-[30px] text-white md:text-4xl md:leading-[45px] lg:text-6xl lg:leading-[60px]">
        Hi, I'm Yamilka Henriquez <br /> Web Developer & <br /> Programming
        Teacher
      </h1>
    </LayoutAnimateX>

    <LayoutAnimationY delay={0.4}>
      <h2 className="font-bold leading-loose tracking-widest text-secondary-400 md:text-xl md:leading-hero">
        WELCOME TO MY ONLINE PORTFOLIO AND CV
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
      <div className="flex flex-wrap items-end justify-start gap-2 sm:gap-3">
        <Link legacyBehavior passHref href="/assets/doc/resume.pdf">
          <a
            className="mt-5 block rounded-full bg-blue-600 px-6 py-3 font-bold tracking-widest text-white transition-all hover:bg-[#2f72de] hover:transition-all md:px-9"
            target="_blank"
          >
            RESUMEN
          </a>
        </Link>

        <div className="flex items-end justify-start gap-2 sm:gap-3 ">
          <Link
            legacyBehavior
            passHref
            href="https://www.linkedin.com/in/yamilka-cosme-b4045314b"
          >
            <a
              target="_blank"
              title="https://www.linkedin.com/in/yamilka-cosme-b4045314b"
            >
              <FaLinkedin
                size={30}
                className="text-white transition-all hover:text-[#cccccc] hover:transition-all"
              />
            </a>
          </Link>

          <Link legacyBehavior passHref href="https://github.com/YamiYamir">
            <a title="https://github.com/YamiYamir" target="_blank">
              <FaGithub
                size={30}
                className="text-white transition-all hover:text-[#cccccc] hover:transition-all"
              />
            </a>
          </Link>
          <Link href="mailto:yamilka_268465460@hotmail.com">
            <IoMdMail
              title="yamilka_268465460@hotmail.com"
              size={37}
              className="mb-[-4px] text-white transition-all hover:text-[#cccccc] hover:transition-all"
            />
          </Link>
        </div>
      </div>
    </LayoutAnimationY>
  </Section>
);

export { Hero };
