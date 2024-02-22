import React from 'react';

import styles from './index.less';

export const MarketingAd: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          className={styles.img}
          src="https://placehold.co/676x1032/dddddd/FFF"
          alt="Marketing Ad"
        />
      </div>
    </div>
  );
};
