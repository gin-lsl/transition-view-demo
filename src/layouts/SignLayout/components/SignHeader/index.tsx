import { Button } from 'antd';
import React from 'react';
import { Link, history, useLocation } from 'umi';

import { startViewTransition } from '@/utils/transition';
import { flushSync } from 'react-dom';
import styles from './index.less';

interface SignHeaderProps {
  withTransition?: boolean;
}

export const SignHeader: React.FC<SignHeaderProps> = (props) => {
  const loc = useLocation();

  const isLoginPage = loc.pathname.includes('/login');

  const onGoto = () => {
    if (isLoginPage) {
      history.push('./register');
    } else {
      history.push('./login');
    }
  };

  return (
    <div className={styles.container}>
      <Link to="/">
        <Button type="link">
          <span>Home</span>
        </Button>
      </Link>

      <div className={styles.text}>
        {isLoginPage ? "Don't have an account?" : 'Already have an account?'}
      </div>

      <Button
        ghost
        type="primary"
        shape="round"
        onClick={() => {
          console.log('props.withTransition', props.withTransition);
          if (!props.withTransition) {
            onGoto();
          } else {
            startViewTransition(() => {
              flushSync(() => {
                onGoto();
              });
            });
          }
        }}
      >
        {isLoginPage ? 'Sign Up' : 'Log In'}
      </Button>
    </div>
  );
};
