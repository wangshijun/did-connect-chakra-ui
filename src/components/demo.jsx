import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import useLocalStorage from 'react-use/lib/useLocalStorage';

import Connect from './connect';

function HelloConnect() {
  const [open, setOpen] = useState(false);
  const [connectedUser, setConnectedUser] = useLocalStorage('connectedUser', null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleApprove = (ctx, e) => {
    console.log('onApprove', ctx, e);
  };

  const handleComplete = (ctx) => {
    setConnectedUser(ctx.currentConnected);
    setOpen(false);
  };

  return (
    <div>
      {!connectedUser && (
        <Button colorScheme="blue" variant="solid" onClick={() => setOpen(true)}>
          Connect with DID Wallet
        </Button>
      )}
      {connectedUser && (
        <div style={{ textAlign: 'left' }}>
          Connected: <pre>{JSON.stringify(connectedUser, null, 2)}</pre>
          <Button colorScheme="blue" variant="solid" onClick={() => setConnectedUser(null)}>
            Switch User
          </Button>
        </div>
      )}
      <Connect
        popup
        open={open}
        onlyConnect
        onClose={handleClose}
        onConnect={[]}
        onApprove={handleApprove}
        onComplete={handleComplete}
        messages={{
          title: 'Connect DID Wallet',
          scan: 'You will always see the app connection screen on DID Wallet when scan follow qrcode',
          confirm: 'Confirm operation on your DID Wallet',
          success: 'You have successfully connected!',
        }}
        relayUrl="/.well-known/service/api/connect/relay"
      />
    </div>
  );
}

export default HelloConnect;
