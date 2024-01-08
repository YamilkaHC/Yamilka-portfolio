import React from 'react';

import LayoutAnimateX from '../layout/LayoutAnimateX';

type TitleSectionn = {
  title: string;
};
const TitleSection = ({ title }: TitleSectionn) => {
  return (
    <div className="mx-4 mb-10  md:mx-16  lg:mx-20">
      <LayoutAnimateX delay={0.4}>
        <h2 className="  space-x-16 text-6xl font-semibold tracking-widest text-white">
          {title}
        </h2>
      </LayoutAnimateX>
      <LayoutAnimateX delay={0.6}>
        <hr className="my-2  h-[3px] w-[75px] rounded-md border-0 bg-secondary-400 "></hr>
      </LayoutAnimateX>
      <LayoutAnimateX delay={0.8}>
        <hr className="my-3 ml-12 h-[3px] w-[75px] rounded-md border-0 bg-secondary-400 "></hr>
      </LayoutAnimateX>
    </div>
  );
};

export default TitleSection;
