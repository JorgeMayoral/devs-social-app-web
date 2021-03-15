import { Button } from '@chakra-ui/button';
import { Box, Heading, Link, Text } from '@chakra-ui/layout';
import { Form, Formik } from 'formik';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import InputField from '../components/InputField';
import Layout from '../components/Layout';

const Login = () => {
  const router = useRouter();

  function validate(values) {
    const errors = {};

    if (!values.username) {
      errors.username = 'Username is required.';
    }

    if (!values.password) {
      errors.password = 'Password is required.';
    }

    return errors;
  }

  async function loginUser(values) {
    const userData = {
      username: values.username,
      password: values.password,
    };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        },
      );
      const data = await response.json();
      console.log(data);
      router.push('/');
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout>
      <Box bgColor="#fff" p={4} mt={10} borderRadius="lg">
        <Heading>Sign in</Heading>
        <Formik
          onSubmit={async (values, actions) => {
            actions.setSubmitting(true);
            await loginUser(values);
            actions.setSubmitting(false);
          }}
          validate={validate}
          initialValues={{
            username: '',
            password: '',
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField name="username" label="Username" />
              <InputField name="password" label="Password" type="password" />
              <Button
                type="submit"
                mt={4}
                bgColor="#00adb5"
                color="white"
                size="md"
                borderWidth={2}
                isLoading={isSubmitting}
                _hover={{
                  bgColor: 'white',
                  color: '#00adb5',
                  borderColor: '#00adb5',
                  borderWidth: 2,
                }}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
        <Text mt={4}>
          Don't have an account?{' '}
          <NextLink href="/register">
            <Link color="#00adb5">Sign up</Link>
          </NextLink>
          .
        </Text>
      </Box>
    </Layout>
  );
};

export default Login;
