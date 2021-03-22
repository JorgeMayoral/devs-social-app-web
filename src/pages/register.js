import { Button } from '@chakra-ui/button';
import { Box, Heading, Link, Text } from '@chakra-ui/layout';
import { Form, Formik } from 'formik';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import InputField from '../components/InputField';
import Layout from '../components/Layout';
import { useUser } from '../hooks/useUser';

const Register = () => {
  const { register, hasError } = useUser();
  const router = useRouter();

  function validate(values) {
    const errors = {};

    if (!values.username) {
      errors.username = 'Username is required.';
    }

    if (!values.name) {
      errors.name = 'Name is required.';
    }

    if (!values.email) {
      errors.email = 'Email is required.';
    }

    if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords must be the same.';
    }

    return errors;
  }

  async function registerUser(values) {
    register(values);
    if (!hasError) {
      router.push('/');
    }
  }

  return (
    <Layout>
      <Box bgColor="#fff" p={4} mt={10} borderRadius="lg">
        <Heading>Create an account</Heading>
        <Formik
          onSubmit={async (values, actions) => {
            actions.setSubmitting(true);
            await registerUser(values);
            actions.setSubmitting(false);
          }}
          validate={validate}
          initialValues={{
            username: '',
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField name="username" label="Username" />
              <InputField name="name" label="Name" />
              <InputField name="email" label="Email" type="email" />
              <InputField name="password" label="Password" type="password" />
              <InputField
                name="confirmPassword"
                label="Confirm password"
                type="password"
              />
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
                Register
              </Button>
            </Form>
          )}
        </Formik>
        <Text mt={4}>
          Already have an account?{' '}
          <NextLink href="/login">
            <Link color="#00adb5">Login</Link>
          </NextLink>
          .
        </Text>
      </Box>
    </Layout>
  );
};

export default Register;
