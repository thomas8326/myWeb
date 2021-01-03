import React from 'react';
import { Popover, Button } from 'antd';
import Message from 'src/containers/message/message';

function Showroom() {
  return (
    <>
      <div className="flex-row">
        <Popover placement="topLeft" title="Message" content={Message} trigger="click">
          <Button type="primary">Chat</Button>
        </Popover>
      </div>
      <div className="full-layout flex-col flex-center"> is Showroom</div>
    </>
  );
}

export default Showroom;
