import React from 'react';

import LayoutAnimateX from '../layout/LayoutAnimateX';

type TitleSectionn = {
  title: string;
};
const TitleSection = ({ title }: TitleSectionn) => {
  return (
    <div className="mx-4 mb-10 mt-2 md:mx-16  lg:mx-20">
      <LayoutAnimateX delay={0.4}>
        <h2 className="  space-x-16 text-2xl font-semibold uppercase tracking-widest text-white md:text-4xl lg:text-5xl">
          {title}
        </h2>
      </LayoutAnimateX>
      <LayoutAnimateX delay={0.6}>
        <hr className="my-2   h-[2px] w-[50px] rounded-md border-0 bg-secondary-400 md:h-[3px] md:w-[75px] "></hr>
      </LayoutAnimateX>
      <LayoutAnimateX delay={0.8}>
        <hr className="my-3 ml-6 h-[2px]  w-[50px] rounded-md border-0 bg-secondary-400 md:ml-12 md:h-[3px] md:w-[75px] "></hr>
      </LayoutAnimateX>
    </div>
  );
};

export default TitleSection;
