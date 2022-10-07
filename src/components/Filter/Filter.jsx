import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import PropTypes from 'prop-types';

import { Flex, Input, Box } from '@chakra-ui/react'

export const Filter = ({ text }) => {
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        dispatch(setFilter(e.currentTarget.value));
    }

    return <Flex flexDirection="column" alignItems="center" w='500px' m='0 auto' p={5}>
        <Box as='h2' color='cyan.500' fontSize='lg' fontWeight='bold' mb={5}>
            {text}
          </Box>
        <Input placeholder='Find your contact...'
               focusBorderColor='cyan.500'    
            type="text" name="find" onChange={handleChange} /></Flex>
}

Filter.propTypes = {
    text: PropTypes.string.isRequired,
}