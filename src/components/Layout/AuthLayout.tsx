import React from 'react';
import { Layout } from 'antd';

interface AuthLayoutProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  logoSrc: string;
  logoAlt: string;
  overlayText: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  imageSrc,
  imageAlt,
  logoSrc,
  logoAlt,
  overlayText,
}) => {
  return (
    <Layout className="h-screen">
      <div className="flex flex-col md:flex-row w-full h-screen bg-white">
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6">
            <img
              src={logoSrc}
              alt={logoAlt}
              className="h-4 w-auto"
            />
          </div>
          <div className='w-full flex justify-center items-center'>
            <div className="absolute bottom-10 text-white text-4xl px-4 py-2 rounded-md w-8/12 font-normal flex text-center items-center ">
              {overlayText}
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-[480px]">{children}</div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthLayout;
