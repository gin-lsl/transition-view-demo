import React, { useEffect } from 'react';

import { onLinkNavigate, startViewTransition } from '@/utils/transition';
import { Outlet } from 'umi';
import styles from './index.less';

const GlobalLayout: React.FC = () => {
  useEffect(() => {
    console.log('effect');
    onLinkNavigate(async (payload) => {
      console.log('on navigation is back', payload.isBack);
      if (payload.isBack) {
        document.documentElement.classList.add('app-back-transition');
      }

      const transition = startViewTransition(() => {});

      transition?.finished.finally(() => {
        console.log('nav finished');
        document.documentElement.classList.remove('app-back-transition');
      });
    });
  }, []);

  return (
    <div className={styles.app}>
      <Outlet />
    </div>
  );
};

export default GlobalLayout;
