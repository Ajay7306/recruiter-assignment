import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import { Divider } from 'antd';
import AuthLayout from '../Layout/AuthLayout';
import SocialLoginButtons from './Button/SocialLoginButtons';

const { Title } = Typography;

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Login values:', values);
    navigate('/dashboard');
  };
  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <AuthLayout
      imageSrc="/bg.png"
      imageAlt="Office workspace"
      logoSrc='white-logo.png'
      logoAlt='Recruiter logo'
      overlayText='Transforming Talent Acquisition through Automation'
    >
      <div className="mb-8">
        <Title level={2} className='text-2xl drop-shadow-md font-semibold'>Login to your account</Title>
      </div>

      <Form
        name="login"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input
            placeholder="Enter your email"
            size="large"
            className='h-[52px]'
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            placeholder="Password"
            size="large"
            className='h-[52px]'
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            LOG IN
          </Button>
        </Form.Item>

        <div className="w-full flex justify-between">
          <Checkbox onChange={onChange}>Remember me</Checkbox>
          <Link to="#" className="text-[13px] font-normal">
            Can't Login?
          </Link>
        </div>
      </Form>
      <Divider orientation="center" className='!text-xs border-[#D9D9D9] !font-light'>or continue with</Divider>
      <div className='flex w-full justify-between items-center'>
        <SocialLoginButtons />
      </div>
      <div className='w-full text-[13px]'>
        Not a customer?<Link to='/register' className='font-semibold text-black'>Create your account</Link>
      </div>
    </AuthLayout>
  );
};

export default LoginForm;