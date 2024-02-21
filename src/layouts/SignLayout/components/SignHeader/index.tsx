import { Button } from 'antd';
import React from 'react';
import { Link, history, useLocation } from 'umi';

import styles from './index.less';

export const SignHeader: React.FC = () => {
  const loc = useLocation();

  const isLoginPage = loc.pathname.includes('/login');

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
          if (isLoginPage) {
            history.push('./register');
          } else {
            history.push('./login');
          }
        }}
      >
        {isLoginPage ? 'Sign Up' : 'Log In'}
      </Button>
    </div>
  );
};
