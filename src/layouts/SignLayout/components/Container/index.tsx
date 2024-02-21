import React from 'react';
import { Outlet } from 'umi';

import { MarketingAd } from '../MarketingAd';
import { SignHeader } from '../SignHeader';

import styles from './index.less';

interface SignContainerProps {
  classNames: {
    root?: string;
  };

  withTransition?: boolean;
}

// sign common container
export const SignContainer: React.FC<SignContainerProps> = (props) => {
  return (
    <div className={styles.signLayout + ' ' + props.classNames.root}>
      <div className={styles.layoutContainer}>
        <MarketingAd />

        <div className={styles.pageBox}>
          <SignHeader withTransition={props.withTransition} />

          <div className={styles.contentBox}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
