import { Button } from 'antd';
import React from 'react';
import { Link, Outlet, history } from 'umi';

import styles from './index.less';

const HomeLayout: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navs}>
        <ul>
          <li>
            <Link to="/">
              <Button type="link">Home</Button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <Button type="link">About</Button>
            </Link>
          </li>
        </ul>

        <Button
          shape="round"
          ghost
          type="primary"
          onClick={() => {
            history.push('/basic-sign/login');
          }}
        >
          Log In
        </Button>
      </div>

      <Outlet />
    </div>
  );
};

export default HomeLayout;
