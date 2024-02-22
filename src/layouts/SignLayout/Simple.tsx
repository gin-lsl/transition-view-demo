import React from 'react';

import styles from './Simple.less';
import { SignContainer } from './components/Container';

// simple animation
const BasicSignLayout: React.FC = () => {
  return (
    <SignContainer
      classNames={{
        root: styles.simpleContainer,
      }}
      withTransition={false}
    />
  );
};

export default BasicSignLayout;
