import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Footer = () => (
  <div className="flex h-[200px] flex-col  content-center items-center justify-center  py-5">
    <div className="flex justify-center gap-3 ">
      <Link href="https://www.linkedin.com/in/yamilka-cosme-b4045314b">
        <FaLinkedin size={30} color="white" />
      </Link>
      <Link href="https://github.com/YamiYamir">
        <FaGithub size={30} color="white" />
      </Link>
      <Link href="mailto:yamilka_268465460@hotmail.com">
        <IoMdMail size={32} color="white" />
      </Link>
    </div>
    <div className="flex justify-center gap-3 ">
      <span className="text-white">© 2023 by Yamilka Henríquez Cosme</span>
    </div>
  </div>
);

export { Footer };
