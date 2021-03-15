import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { Box, Center, Heading, Link, Text } from '@chakra-ui/layout';
import NextLink from 'next/link';

const Navbar = () => {
  return (
    <Flex my={2} mx={20}>
      <NextLink href="/">
        <Link _hover={{ textDecoration: 'none' }}>
          <Center>
            <Heading size="lg" color="#00adb5">
              Devs
            </Heading>
            <Heading size="lg">Social</Heading>
          </Center>
        </Link>
      </NextLink>

      <Box ml="auto">
        <NextLink href="/login">
          <Link>
            <Button
              bgColor="#00adb5"
              color="white"
              size="md"
              borderWidth={2}
              _hover={{
                bgColor: 'white',
                color: '#00adb5',
                borderColor: '#00adb5',
                borderWidth: 2,
              }}
            >
              Login
            </Button>
          </Link>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default Navbar;
