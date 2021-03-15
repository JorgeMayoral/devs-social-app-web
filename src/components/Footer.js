import { Box, Center, Link, Text } from '@chakra-ui/layout';

const Footer = () => {
  return (
    <Box my={2}>
      <Center>
        <Link href="https://yorch.dev/contacto" isExternal>
          <Text>Contact</Text>
        </Link>
      </Center>
    </Box>
  );
};

export default Footer;
