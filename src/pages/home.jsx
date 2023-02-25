import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Heading, Box, Link } from '@chakra-ui/react';

import ConnectDemo from '../components/demo';

function Home() {
  return (
    <div>
      <Box m={5}>
        <Heading mb={5}>DID Connect + Chakra UI</Heading>
        <ConnectDemo />
      </Box>
      <Box m={5}>
        <RouterLink className="app-link" to="/about">
          About
        </RouterLink>
        <Link href="https://docs.arcblock.io/abtnode/" isExternal ml={5}>
          Learn Blocklet
        </Link>
      </Box>
    </div>
  );
}

export default Home;
