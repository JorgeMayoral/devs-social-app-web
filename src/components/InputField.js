import { FormLabel } from '@chakra-ui/form-control';
import { FormErrorMessage } from '@chakra-ui/form-control';
import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { useField } from 'formik';

const InputField = ({ label, ...props }) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name} mb={0} mt={4}>
        {label}
      </FormLabel>
      <Input {...field} {...props} id={field.name} bgColor="#fefefe" />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default InputField;
