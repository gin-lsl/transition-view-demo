import React from 'react';
import { Outlet } from 'umi';

import { MarketingAd } from './components/MarketingAd';
import { SignHeader } from './components/SignHeader';
import styles from './index.less';

const SignLayout: React.FC = () => {
  return (
    <div className={styles.signLayout}>
      <div className={styles.layoutContainer}>
        <MarketingAd />

        <div className={styles.pageBox}>
          <SignHeader />

          <div className={styles.contentBox}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignLayout;
