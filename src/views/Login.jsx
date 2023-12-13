import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Col, Divider, Row, Card, Flex } from 'antd';

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const boxStyle = {
    width: '100%',
    height: 350,
    borderRadius: 6,
  };
  return (
    <Flex align="center" vertical>
      <Divider orientation="center">Responsive</Divider>
      <Flex style={boxStyle} justify="center" align="center">
        <Card style={{width:"500px"}} title="Ingreso" bordered={true}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Ingresa tu usuario',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Ingresa tu contraseña',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="contraseña"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Flex>
    </Flex>
  );
};
export default Login;
