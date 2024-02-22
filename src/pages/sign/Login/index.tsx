import { Button, Divider, Form, Input, Typography } from 'antd';
import React from 'react';

import styles from './index.less';

const LoginPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Typography.Title>Log in</Typography.Title>
        <Form layout="vertical" className={styles.form}>
          <Form.Item label="Email">
            <Input />
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password />
          </Form.Item>
          <Button type="primary" shape="round">
            Continue
          </Button>

          <Divider>Or</Divider>

          <Button.Group>
            <Button type="default" shape="round">
              Continue with Google
            </Button>
            <Button type="default" shape="round">
              Continue with Facebook
            </Button>
          </Button.Group>

          <div className={styles.info}>
            We recommend using a third-party login
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
