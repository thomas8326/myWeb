import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import Message from 'src/containers/message/message';

function Showroom() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Chat
      </Button>
      <div className="flex-row">
        <Drawer
          width="400px"
          placement="right"
          visible={visible}
          onClose={() => setVisible(false)}
          closable={false}
          maskStyle={{ backgroundColor: 'transparent' }}
          destroyOnClose
        >
          <Message />
        </Drawer>
      </div>
      <div className="full-layout flex-col flex-center"> is Showroom</div>
    </>
  );
}

export default Showroom;
