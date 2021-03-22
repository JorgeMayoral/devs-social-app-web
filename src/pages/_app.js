import { Box, ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { UserContextProvider } from '../context/UserContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <ChakraProvider>
        <ColorModeProvider
          options={{ useSystemColorMode: false, initialColorMode: 'light' }}
        >
          <Box bgColor="#eeeeee">
            <Component {...pageProps} />
          </Box>
        </ColorModeProvider>
      </ChakraProvider>
    </UserContextProvider>
  );
}

export default MyApp;
