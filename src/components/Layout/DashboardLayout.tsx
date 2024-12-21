import React from 'react';
import { Avatar, Badge, Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { AlignJustify, Briefcase, Home, Info, Users } from 'lucide-react';
import {BellFilled } from '@ant-design/icons'

const { Header, Sider, Content } = Layout;

const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: 'home',
      icon: <Home className='w-4 h-4' />,
      label: 'Home',
      onClick: () => navigate('/dashboard/home'),
    },
    {
      key: 'job',
      icon: <Briefcase className="w-4 h-4" />,
      label: 'Job',
      onClick: () => navigate('/dashboard/job'),
    },
    {
      key: 'client',
      icon: <Users className="w-4 h-4" />,
      label: 'Client',
      onClick: () => navigate('/dashboard/client'),
    }
  ];

  return (
    <Layout className="min-h-screen">
      <Header className="bg-white px-6 flex items-center justify-between w-full">
        <img src='/black-logo.png' alt='recruiter logo' className='h-4 w-auto mx-[20px] my-[22px]' />
        <div className='flex justify-center items-center gap-2'>
          <Info absoluteStrokeWidth className='text-[#9DA2AE] h-[18px] w-[18px]' />
          <Badge count={4} className='bg-white'>
            <Avatar shape="square" icon={<BellFilled />}  className='bg-white text-[#154382]'/>
          </Badge>
          <Avatar shape="circle"  className='bg-white border border-[#F5F5F7] w-[40px] h-[40px]'>
            <img src="/user.png" alt='user logo' className='w-full h-full object-fill'/>
          </Avatar>
        </div>
      </Header>
      <Layout>
        <Sider theme="light" className="shadow-md bg-white">
          <hr />
          <div className=''>
            <div className='py-1 px-3 flex justify-between items-center'>
              <p className='font-semibold text-[15px]'>Menu</p>
              <div className='w-[20px] h-[14px] text-[15px] !text-black'>
                <AlignJustify className='w-full h-full' />
              </div>
            </div>
            <hr />
            <Menu
              mode="inline"
              defaultSelectedKeys={['dashboard']}
              items={menuItems}
              className='rounded-none text-[#6E6E73]'
            />
          </div>
        </Sider>
        <Content className="m-6 p-6">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;