import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

import useHover from '@/hooks/useHover';

type TestimonyCardProps = {
  testimonyText: string;
  person: string;
  image: string;
  position: string;
};

const TestimonyCard = ({ data }: { data: TestimonyCardProps }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isHovered = useHover(elementRef);
  return (
    <>
      <div
        className={
          isHovered
            ? 'md:fixed md:left-0 md:top-0 md:h-full md:w-full md:bg-[#00000038] md:transition-all '
            : ''
        }
      ></div>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 1 }}
      >
        <div
          ref={elementRef}
          className="flex flex-col justify-between rounded-3xl bg-primary-400 px-8 py-10 text-white  shadow-lg md:min-h-[430px] md:max-w-[330px]"
        >
          <div className="flex flex-col gap-4">
            <Image
              sizes="45"
              src={data.image}
              width={65}
              height={65}
              className={`rounded-full ${
                isHovered ? ' shadow-[#62616157]' : ''
              }`}
              alt="person-photo"
            />
            <span className="text-[15px] font-medium">
              {data.testimonyText}
            </span>
          </div>

          <br />
          <div className="flex flex-col md:flex-row md:gap-2">
            <span className=" text-[14px] italic text-secondary-500">
              {data.person}
            </span>
            <span className=" text-[14px] italic">{data.position}</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TestimonyCard;
