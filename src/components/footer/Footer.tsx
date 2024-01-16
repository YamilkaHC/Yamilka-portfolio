import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Footer = () => (
  <div className="mb-10 flex h-[200px]  flex-col content-center items-center justify-center py-5  md:mb-0">
    <div className="flex justify-center gap-3 ">
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
          className="mt-[-3px] text-white transition-all hover:text-[#cccccc] hover:transition-all"
        />
      </Link>
    </div>
    <div className="flex justify-center gap-3 ">
      <span className="text-white">© 2023 by Yamilka Henríquez Cosme</span>
    </div>
  </div>
);

export { Footer };
