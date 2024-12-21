import React from 'react';
import { Form, Input, Button, Typography, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../Layout/AuthLayout';

const { Title } = Typography;
const phoneCodes = [
  {
    value: '+1',
    label: (
      <div className="flex items-center gap-2">
        <img
          src="https://flagcdn.com/us.svg"
          alt="US"
          className="w-5 h-5"
        />
        USA (+1)
      </div>
    ),
  },
  {
    value: '+91',
    label: (
      <div className="flex items-center gap-2">
        <img
          src="https://flagcdn.com/in.svg"
          alt="India"
          className="w-5 h-5"
        />
        India (+91)
      </div>
    ),
  },
  {
    value: '+44',
    label: (
      <div className="flex items-center gap-2">
        <img
          src="https://flagcdn.com/gb.svg"
          alt="UK"
          className="w-5 h-5"
        />
        UK (+44)
      </div>
    ),
  },
  {
    value: '+61',
    label: (
      <div className="flex items-center gap-2">
        <img
          src="https://flagcdn.com/au.svg"
          alt="Australia"
          className="w-5 h-5"
        />
        Australia (+61)
      </div>
    ),
  },
];

const locations = [
  { value: 'new-york', label: 'New York' },
  { value: 'san-francisco', label: 'San Francisco' },
  { value: 'london', label: 'London' },
  { value: 'tokyo', label: 'Tokyo' },
  { value: 'sydney', label: 'Sydney' },
];

const timezones = [
  { value: 'PST', label: 'Pacific Standard Time (PST)' },
  { value: 'EST', label: 'Eastern Standard Time (EST)' },
  { value: 'GMT', label: 'Greenwich Mean Time (GMT)' },
  { value: 'IST', label: 'India Standard Time (IST)' },
  { value: 'AEST', label: 'Australian Eastern Standard Time (AEST)' },
];

const CompanyForm: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Company values:', values);
    navigate('/dashboard');
  };

  return (
    <AuthLayout
      imageSrc="/bg.png"
      imageAlt="Office workspace"
      logoSrc="white-logo.png"
      logoAlt="Recruiter logo"
      overlayText="Transforming Talent Acquisition through Automation"
    >
      <div className="mb-8">
        <Title level={2} className="text-2xl drop-shadow-md font-semibold text-left">
          One last step.
          <br /> Enter your company details.
        </Title>
      </div>

      <Form
        name="company"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="companyName"
          rules={[{ required: true, message: 'Please input your company name!' }]}
        >
          <Input
            placeholder="Company Name" className='h-[52px]'
          />
        </Form.Item>

        <div className="flex flex-row justify-between items-center">
          <Form.Item
            name="phoneCode"
            rules={[{ required: true, message: 'Please select a phone code!' }]}
            className="w-3/12"
          >
            <Select
              placeholder={
                <div className="flex items-center gap-2">
                  <img
                    src="https://flagcdn.com/gb.svg"
                    alt="UK"
                    className="w-5 h-5"
                  />
                  +44
                </div>
              }
              options={phoneCodes}
              className="h-[52px]"
            />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
            className='w-8/12'
          >
            <Input placeholder="Phone Number (Optional)" className='h-[52px]' />
          </Form.Item>
        </div>
        <Form.Item
          name="location"
          rules={[{ required: true, message: 'Please select your location!' }]}
        >
          <Select
            placeholder="Select Location"
            options={locations}
            className='h-[52px]'
          />
        </Form.Item>
        <Form.Item
          name="timezone"
          rules={[{ required: true, message: 'Please select your timezone!' }]}
        >
          <Select
            placeholder="Select Timezone"
            options={timezones}
            className='h-[52px]'
          />
        </Form.Item>

        <div className="text-[15px] font-light text-[#86868B] mb-5">
          By creating an account, you agree to our{' '}
          <a href="#" className="underline text-[#86868B]">
            Terms of Service
          </a>{' '}
          and have read and understood the{' '}
          <a href="#" className="underline text-[#86868B]">
            Privacy Policy
          </a>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            START 7-DAY FREE TRIAL
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};

export default CompanyForm;
