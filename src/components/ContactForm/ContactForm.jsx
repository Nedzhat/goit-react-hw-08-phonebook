import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operation';

import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required(),
    })
    
const initialValues = {
        name: '',
        number: '',
    }    

export const ContactForm = () => {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    dispatch(addContact({
      name,
      number
    }));
    e.target.name.value = '';
    e.target.number.value = '';
  }
  return (
    <Box m="0 auto" w='500px' p={5}>
      <Formik initialValues={initialValues} validationSchema={schema}>
        <Form autoComplete='off' onSubmit={handleSubmit}>
          <FormControl isRequired>
            <Stack mb='20px'>
              <FormLabel>Name</FormLabel>
              <Input name="name" focusBorderColor='cyan.500' placeholder='Name' />
              <FormLabel>Number</FormLabel>
              <Input type="tel" name="number" focusBorderColor='cyan.500' placeholder='Number'
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses" />
            </Stack>
            <Button type="submit" colorScheme='cyan' display="block" m='0 auto' color='white' style={{ textTransform: 'uppercase' }}>Add contact</Button>
          </FormControl>
        </Form>
      </Formik>
    </Box>
  )
};
