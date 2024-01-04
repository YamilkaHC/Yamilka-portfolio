import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

import { Background } from '../background/Background';

const Footer = () => (
  <Background color="bg-primary-400 h-[200px]  ">
    <div className="flex h-full flex-col content-center items-center justify-center gap-2 py-5">
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
  </Background>
);

export { Footer };
