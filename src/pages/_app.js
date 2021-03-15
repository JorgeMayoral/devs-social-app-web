import { Box, ChakraProvider, ColorModeProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeProvider
        options={{ useSystemColorMode: false, initialColorMode: 'light' }}
      >
        <Box bgColor="#eeeeee">
          <Component {...pageProps} />
        </Box>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
