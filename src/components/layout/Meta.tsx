import Head from 'next/head';
import { useRouter } from 'next/router';
import type { NextSeoProps } from 'next-seo';
import { NextSeo } from 'next-seo';

const Meta = (props: NextSeoProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <link href="nprogress.css" />
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo {...props} />
    </>
  );
};

export { Meta };
