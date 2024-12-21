import React from 'react';
import { Row, Col, Card, Button } from 'antd';
const Overview: React.FC = () => {
  const cardData = [
    {
      title: "Total Users",
      value: 1234,
      icon: "create-job-icon.png",
      buttonText: "CREATE JOB",
    },
    {
      title: "Companies",
      value: 56,
      icon: "/add-client-icon.png",
      buttonText: "ADD CLIENTS",
    },
    {
      title: "Active Users",
      value: 892,
      icon: "/invite-user-icon.png",
      buttonText: "INVITE USERS",
    },
  ];

  return (
    <div>
      <h1 className="mb-3 text-center text-[40px] font-semibold">Welcome User</h1>
      <div className='w-full flex justify-center mb-12 '><p className='text-center text-[15px] font-normal w-8/12'>Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad</p></div>
      <Row gutter={[16, 16]} className="justify-center">
        {cardData.map((card, index) => (
          <Col key={index} className="flex justify-center gap-6">
            <Card
              className="w-[300px] rounded-[20px] bg-white flex flex-col items-center justify-center text-center"
            >
              <div className="text-[15px] font-normal mb-[25px]"><p>{card.title}</p></div>
              <div><img src={card.icon} className='w-[50px] h-[50px] object-cover mb-[25px]'/></div>
              <Button type="primary" className="px-[10px] !text-[15px] !font-semibold !w-[140px] rounded-[10px] !h-[40px] hover:!bg-[#335cab]">
                {card.buttonText}
              </Button>
            </Card>
          </Col>
        ))} 
      </Row>
    </div>
  );
};

export default Overview;