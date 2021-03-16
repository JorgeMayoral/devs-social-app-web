import { Center, Link, Text } from '@chakra-ui/layout';

const Footer = () => {
  return (
    <Center bgColor="#fff" p={4}>
      <Link href="https://yorch.dev/contacto" isExternal>
        <Text>Contact</Text>
      </Link>
    </Center>
  );
};

export default Footer;
