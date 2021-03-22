import { Button } from '@chakra-ui/button';
import { Text } from '@chakra-ui/layout';
import { HStack } from '@chakra-ui/layout';
import { Box, Center, Flex, Heading, Link } from '@chakra-ui/layout';
import NextLink from 'next/link';
import { useUser } from '../hooks/useUser';

const Navbar = () => {
  const { user, logout } = useUser();

  return (
    <Flex zIndex={1} position="sticky" top={0} bgColor="#fff" p={4}>
      <Flex flex={1} m="auto" align="center">
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
          {user ? (
            <HStack spacing={4}>
              <Text color="black">{user.name}</Text>
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
                onClick={logout}
              >
                Logout
              </Button>
            </HStack>
          ) : (
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
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
