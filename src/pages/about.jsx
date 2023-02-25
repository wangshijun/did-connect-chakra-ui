import { Link } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/react';

function About() {
  return (
    <Box>
      <Heading>
        <Link className="app-link" to="/">
          Back Home
        </Link>
      </Heading>
      <h2>Hello, i'm a static blocklet</h2>
    </Box>
  );
}

export default About;
