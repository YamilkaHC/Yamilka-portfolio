import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

import { EMAIL } from '@/utils/AppConfig';

const Footer = () => (
  <div className="mb-2 flex h-[200px]  flex-col content-center items-center justify-center py-5  md:mb-0">
    <div className="flex justify-center gap-3 ">
      <Link
        target="_blank"
        title="https://www.linkedin.com/in/yamilka-henriquez-cosme-b4045314b/"
        href="https://www.linkedin.com/in/yamilka-henriquez-cosme-b4045314b/"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          size={30}
          className="w-[25px] text-white transition-all hover:text-[#cccccc] hover:transition-all md:w-[30px]"
        />
      </Link>

      <Link
        href="https://github.com/YamilkaHC"
        title="https://github.com/YamilkaHC"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub
          size={30}
          className="  w-[25px] text-white transition-all hover:text-[#cccccc] hover:transition-all md:w-[30px]"
        />
      </Link>

      <Link href={`mailto:${EMAIL}`}>
        <IoMdMail
          title={`${EMAIL}`}
          size={37}
          className=" mt-[-3px] w-[32px] text-white transition-all hover:text-[#cccccc] hover:transition-all md:w-[37px]"
        />
      </Link>
    </div>

    <div className="flex justify-center gap-3 ">
      <span className="text-white">{`©${new Date().getFullYear()} by Yamilka Henríquez Cosme`}</span>
    </div>
  </div>
);

export { Footer };
