import React from 'react';

import { isInSequence } from '@/helpers';

import TitleSection from '../titleSection/TitleSection';

type Resume = {
  date?: string;
  position?: string;
  place?: string;
  description?: string;
};

const ResumeSection = () => {
  const resume: Array<Resume> = [
    {
      date: '2023 April -  Current',
      position: 'Web Developer',
      place: 'OGTIC',
      description:
        'Collaborate as a team in the construction of multiple web applications for markets such as gob.do, becas.gob.do, Salón de reuniones among others. Help make decisions about how to build applications and divide work into modules and tasks. Develop documentation of the platforms and a QA testing plan for the QA department using apps like Notion or Miro.',
    },
    {},
    {},
    {
      date: '2022 May - current',
      position: 'Technology Director',
      place: 'PerfectoLabs',
      description:
        'I instructed 40 students in web technologies in groups of 9 to 12 and 13 to 16 years old. Built curricula to teach web development in collaboration with Ozaria. Contributed to the organization of the summer English, programming, and robotics contest, which received international visits.',
    },
    {
      date: '2021 Aug - 2023 April',
      position: 'Frontend Developer',
      place: 'Media Revolution',
      description:
        'Collaborate as a team in the construction of multiple webapplications for markets such as (Crypto, lottery, online games, and transaction platforms). Collaborate in making decisions on how to build the applications, which technologies are the most optimal, and in the division of work into modules and tasks. Work on bug fixes and application optimization.',
    },
    {},
  ];
  return (
    <div
      id="resume"
      className=" mb-20 flex min-h-[100vh] flex-col justify-center  "
    >
      <TitleSection title="Resume" />
      <div className="relative   mx-4 grid grid-cols-2 gap-y-6   md:mx-12  lg:mx-20">
        <div className="absolute  ml-0   h-full w-[1px] bg-secondary-500  md:left-1/2 md:ml-[-2px] md:flex   "></div>
        {resume.map((data, index) => (
          <div
            key={`resume-${index}`}
            className={`group relative flex-wrap  md:flex ${
              isInSequence(index + 1)
                ? 'ml-4  flex-row-reverse justify-start md:ml-0  md:mr-4'
                : 'ml-4'
            } col-span-2 md:col-span-1  lg:gap-5 ${!data.position && 'hidden'}`}
          >
            <div
              className={`flex max-w-[15px] ${
                !(index % 2) && 'md:hidden'
              } absolute left-[-23px] mt-[6px] max-h-[15px] min-h-[15px] min-w-[15px]  rounded-full bg-white opacity-100 transition-all  group-hover:transition-all md:left-[-25px] `}
            ></div>
            <p className="mt-[2px] font-semibold text-gray-500  opacity-100 transition-all md:opacity-50 md:group-hover:opacity-100 md:group-hover:transition-all">
              {data?.date}
            </p>
            <div
              className={`opacity-100 transition-all md:opacity-50 md:group-hover:opacity-100 md:group-hover:transition-all `}
            >
              <div
                className={`flex items-center gap-2 ${
                  isInSequence(index + 1) && ' md:justify-end'
                }`}
              >
                <h3
                  className={`space-x-16 font-extrabold  uppercase text-secondary-500  lg:text-xl `}
                >
                  {data?.position}
                </h3>
                <p className="font-semibold text-gray-500">{data?.place}</p>
              </div>
              <p
                className={`max-w-[450px] text-white ${
                  isInSequence(index + 1) && ' md:text-end '
                }`}
              >
                {data?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeSection;
