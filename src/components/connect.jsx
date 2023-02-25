import React from 'react';
import { Connect, ThemeProvider } from '@did-connect/react';

export default function WrappedConnect(props) {
  return (
    <ThemeProvider>
      <Connect {...props} />
    </ThemeProvider>
  );
}
