import type { NextSeoProps } from 'next-seo';

const TITLE = 'Yamilka Henriquez Cosme';
const DESCRIPTION =
  "Hi, I'm Yamilka Henriquez Cosme, passionate front-end developer crafting captivating web experiences. Explore my diverse portfolio and discover innovation in every line of code.";
export const EMAIL = 'yamilkahcosme@hotmail.com';

export const AppConfig: NextSeoProps = {
  openGraph: {
    site_name: TITLE,
    locale: 'en',
    url: '/assets/images/banner.png',
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
  },
  title: TITLE,

  description: DESCRIPTION,
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
