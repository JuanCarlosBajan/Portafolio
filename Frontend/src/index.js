import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';

const customTheme = extendTheme(
  {
    colors: {
      brand: '#FFF246',
    },
    components: {
      Alert: {
        defaultProps: {
          colorScheme: 'blue',
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: 'brand' })
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <ChakraProvider theme={customTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
