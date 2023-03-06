import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import styles from './layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const homePage = router.pathname === '/';
  const layoutClasses = `${styles.layout} ${homePage ? 'background' : ''}`;

  return (
    <div className={layoutClasses}>
      {children}
    </div>
  );
};

export default Layout;