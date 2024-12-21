import React from 'react';
import { Form, Input, Button, Typography, Divider } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import AuthLayout from '../Layout/AuthLayout';
import SocialLoginButtons from './Button/SocialLoginButtons';

const { Title } = Typography;

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Register values:', values);
    navigate('/company-details');
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
        <Title level={2} className='text-2xl drop-shadow-md font-semibold'>Create your account</Title>
      </div>

      <Form
        name="register"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="first_name"
          rules={[{ required: true, message: 'Please input your first name!' }]}
        >
          <Input
            placeholder="First Name"
            size="large"
            className='h-[52px]'
          />
        </Form.Item>
        <Form.Item
          name="last_name"
          rules={[{ required: true, message: 'Please input your last name!' }]}
        >
          <Input
            placeholder="Last Name"
            size="large"
            className='h-[52px]'
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please input your email address!' },
            { type: 'email', message: 'Please enter a valid email address!' }
          ]}
        >
          <Input
            placeholder="Email Address"
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
        
        <div className='text-[15px] font-light text-[#86868B] mb-5'>
          By creating an account, you agree to our <a href='#' className='underline text-[#86868B]'>Terms of Service</a> and have read and understood the <a href='#' className='underline text-[#86868B]'>Privacy Policy</a>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            CREATE ACCOUNT
          </Button>
        </Form.Item>

        <Divider orientation="center" className='!text-xs border-[#D9D9D9] !font-light'>or continue with</Divider>
        <div className='flex w-full justify-between items-center'>
          <SocialLoginButtons />
        </div>
        <div className='w-full text-[13px]'>
          Already a customer?<Link to='/login' className='font-semibold text-black'>Sign in</Link>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default RegisterForm;