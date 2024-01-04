import Image from 'next/image';
import React from 'react';

type TestimonyCardProps = {
  testimonyText: string;
  person: string;
  image: string;
};

const TestimonyCard = ({ data }: { data: TestimonyCardProps }) => {
  return (
    <div className="flex min-h-[420px] max-w-[330px] flex-col justify-between rounded-3xl bg-primary-300 px-8  py-10 text-white shadow-lg">
      <div className="flex flex-col gap-4">
        <Image
          sizes="45"
          src={data.image}
          width={65}
          height={65}
          className="rounded-full"
          alt="person-photo"
        />
        <span className="text-[15px] font-medium">{data.testimonyText}</span>
      </div>

      <br />
      <span className=" text-[14px] italic">{data.person}</span>
    </div>
  );
};

export default TestimonyCard;
