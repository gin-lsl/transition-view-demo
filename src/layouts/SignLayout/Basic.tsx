import React from 'react';

import { SignContainer } from './components/Container';

import styles from './Basic.less';

// without animation
const BasicSignLayout: React.FC = () => {
  return (
    <SignContainer
      classNames={{
        root: styles.basicContainer,
      }}
    />
  );
};

export default BasicSignLayout;
