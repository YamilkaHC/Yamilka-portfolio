import { AppConfig } from '@/utils/AppConfig';

import Menu from './Menu';
import { Meta } from './Meta';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div className="min-h-[100vh] ">
        <Menu />
        <div className="md:ml-[100px]">{children}</div>
      </div>
    </>
  );
};

export default Layout;
