import React from 'react';
import { Button } from 'antd';

const handleLogin = (platform: string) => {
  console.log(`Login with ${platform}`);
};

const SocialLoginButtons: React.FC = () => {

  const buttonClass = "text-black font-light text-[13px] bg-white border border-[#E5E5E5] rounded-[10px] flex gap-1";

  return (
    <div className="flex flex-row w-full items-center justify-center gap-4 mb-8">
      <Button
        type="primary"
        onClick={() => handleLogin("LinkedIn")}
        className={buttonClass}
        block
      >
        <img
          src="/linkedin.png"
          alt="linkedin icon"
          className="w-fit h-[18px] object-contain"
        />
        LinkedIn
      </Button>
      <Button
        type="primary"
        onClick={() => handleLogin("Google")}
        className={buttonClass}
        block
      >
        <img
          src="/google.png"
          alt="google icon"
          className="w-fit h-[18px] object-contain"
        />
        Google
      </Button>
      <Button
        type="primary"
        onClick={() => handleLogin("Microsoft")}
        className={buttonClass}
        block
      >
        <img
          src="/microsoft.png"
          alt="microsoft icon"
          className="w-fit h-[18px] object-contian"
        />
        Microsoft
      </Button>
    </div>
  );
};

export default SocialLoginButtons;
