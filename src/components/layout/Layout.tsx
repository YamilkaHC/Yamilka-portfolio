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
      <div>
        <Menu />
        <div className="ml-[100px]">{children}</div>
      </div>
    </>
  );
};

export default Layout;
