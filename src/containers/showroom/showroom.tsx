import React from 'react';
import ShowroomHeader from 'src/components/header';
import { Popover, Button } from 'antd';

function Showroom() {
  return (
    <>
      <ShowroomHeader />
      <Popover title="Message" trigger="click">
        <Button>Chat</Button>
      </Popover>
      <div className="full-layout flex-col flex-center"> is Showroom</div>
    </>
  );
}

export default Showroom;
