import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Footer = () => (
  <div className="mb-2 flex h-[200px]  flex-col content-center items-center justify-center py-5  md:mb-0">
    <div className="flex justify-center gap-3 ">
      <Link
        legacyBehavior
        passHref
        href="https://www.linkedin.com/in/yamilka-henriquez-c-b4045314b/"
      >
        <a
          target="_blank"
          title="https://www.linkedin.com/in/yamilka-henriquez-c-b4045314b/"
        >
          <FaLinkedin
            size={30}
            className="w-[25px] text-white transition-all hover:text-[#cccccc] hover:transition-all md:w-[30px]"
          />
        </a>
      </Link>

      <Link legacyBehavior passHref href="https://github.com/YamiYamir">
        <a title="https://github.com/YamiYamir" target="_blank">
          <FaGithub
            size={30}
            className="  w-[25px] text-white transition-all hover:text-[#cccccc] hover:transition-all md:w-[30px]"
          />
        </a>
      </Link>

      <Link href="mailto:yamilka_268465460@hotmail.com">
        <IoMdMail
          title="yamilka_268465460@hotmail.com"
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
