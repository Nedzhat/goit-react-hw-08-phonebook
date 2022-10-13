import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContact } from 'redux/contacts/operation';
import { ListItem, UnorderedList, Text, Box, Button } from '@chakra-ui/react';

export const ContactList = ({ contacts }) => {

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
  };
  
  return (
    <UnorderedList w='700px' m='0 auto'>
      {contacts.map(({ id, name, number }, idx) => {
        return <ListItem key={id} display='flex' justifyContent='space-between' alignItems='center' p={2}>
          <Box display='flex'>
            <Text fontSize='xl' as='b' color='cyan.500'>{idx + 1}.</Text>
            <Text fontSize='xl' as='b' color='cyan.500'>
              {name}:
            </Text>
          </Box>
          <Box w='50%' display='flex' justifyContent='space-between' alignItems='center'>
            <Text fontSize='xl' as='b' color='cyan.500'>
            {number}
          </Text>
          <Button colorScheme='cyan' color='white' onClick={() => handleDelete(id)}>Удалить</Button>
          </Box>
          
        </ListItem>
      })}
    </UnorderedList>
  )
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};