import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

import useHover from '@/hooks/useHover';

type TestimonyCardProps = {
  testimonyText: string;
  person: string;
  image: string;
};

const TestimonyCard = ({ data }: { data: TestimonyCardProps }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isHovered = useHover(elementRef);
  return (
    <>
      <div
        className={
          isHovered
            ? 'fixed left-0 top-0 h-full w-full bg-[#00000038] transition-all md:left-[100px]'
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
          className="flex min-h-[430px] max-w-[330px] flex-col justify-between rounded-3xl bg-primary-400 px-8  py-10 text-white shadow-lg"
        >
          <div className="flex flex-col gap-4">
            <Image
              sizes="45"
              src={data.image}
              width={65}
              height={65}
              // className={`rounded-full ${
              //   isHovered && 'shadow-lg shadow-[#62616157]'
              // }`}
              alt="person-photo"
            />
            <span className="text-[15px] font-medium">
              {data.testimonyText}
            </span>
          </div>

          <br />
          <span className=" text-[14px] italic">{data.person}</span>
        </div>
      </motion.div>
    </>
  );
};

export default TestimonyCard;
