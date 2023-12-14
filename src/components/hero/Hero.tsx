import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { HeroOneButton } from './HeroOneButton';

const Hero = () => (
  <Background color="bg-gray-100">
    {/* <Section yPadding="py-6"> */}
    {/* <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href={"/coco"}>
            coco
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns> */}
    {/* </Section> */}

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The modern landing page for\n'}
            <span className="text-primary-500">React developers</span>
          </>
        }
        description="The easiest way to build a React landing page in seconds."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            {/* <Button xl>Download Your Free Theme</Button> */}
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
