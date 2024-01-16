import React from 'react';
import { BsBootstrapFill, BsGit } from 'react-icons/bs';
import {
  FaBitbucket,
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJira,
  FaNodeJs,
  FaPython,
  FaReact,
  FaTrello,
} from 'react-icons/fa';
import { GrGraphQl } from 'react-icons/gr';
import { IoLogoJavascript } from 'react-icons/io';
import { RiNotionFill } from 'react-icons/ri';
import {
  SiCypress,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

import LayoutAnimateY from '../layout/LayoutAnimateY';
import TitleSection from '../titleSection/TitleSection';

const skills = [
  {
    titleSection: 'Languages',
    items: [
      { icon: FaHtml5, title: 'HTML' },
      { icon: FaCss3Alt, title: 'CSS' },
      { icon: SiExpress, title: 'Express' },
      { icon: IoLogoJavascript, title: 'JavaScript' },
      { icon: SiTypescript, title: 'TypeScript' },
      { icon: FaReact, title: 'React' },
      { icon: TbBrandNextjs, title: 'NextJS' },
      { icon: FaNodeJs, title: 'NodeJS' },
      { icon: GrGraphQl, title: 'GraphQL' },
      { icon: FaPython, title: 'Python' },
    ],
  },
  {
    titleSection: 'Tools',
    items: [
      { icon: FaBitbucket, title: 'Bitbucket' },
      { icon: BsGit, title: 'Git' },
      { icon: FaJira, title: 'Jira' },
      { icon: RiNotionFill, title: 'Notion' },
      { icon: FaTrello, title: 'Trello' },
      { icon: FaGithub, title: 'GitHub' },
      { icon: FaFigma, title: 'Figma' },
      { icon: SiCypress, title: 'Cypress' },
      { icon: SiTailwindcss, title: 'Tailwind' },
      { icon: BsBootstrapFill, title: 'Bootstrap' },
    ],
  },
];

const SkillsSection = () => {
  return (
    <div id="skills" className=" mb-20  lg:mb-0   ">
      <TitleSection title="My Skills" />
      <div className=" mx-auto  flex max-w-[1100px] flex-col gap-10  px-4 pt-6 md:flex-row md:px-16  lg:px-20 ">
        {skills.map((section, index) => (
          <LayoutAnimateY
            key={`skill-${index}`}
            delay={0.2}
            className="flex  w-full flex-col justify-center gap-3"
          >
            <h2 className=" text-center text-2xl font-semibold tracking-widest text-white">
              {section.titleSection}
            </h2>
            <div className=" grid-respo w-full flex-wrap content-start justify-between gap-4 rounded-xl bg-primary-400 p-6 pt-12 md:gap-10 md:p-8 md:py-10 ">
              {section.items.map((data, index2) => (
                <div
                  key={`skill-${index}-${index2}`}
                  className="group flex flex-col items-center"
                >
                  {data.icon && (
                    <data.icon
                      className=" transition-all hover:transition-all group-hover:text-white"
                      size={30}
                    />
                  )}
                  <p className="text-white">{data.title}</p>
                </div>
              ))}
            </div>
          </LayoutAnimateY>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
