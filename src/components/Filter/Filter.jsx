import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import PropTypes from 'prop-types';

import { Flex, Input, Box } from '@chakra-ui/react'

export const Filter = ({ text }) => {
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        dispatch(setFilter(e.currentTarget.value));
    }

    return <Flex flexDirection="column" alignItems="center">
        <Box as='h2' color='orange.500' fontSize='lg' fontWeight='bold'>
            {text}
          </Box>
        <Input placeholder='Find your contact...'
               focusBorderColor='teal.500'    
            type="text" name="find" onChange={handleChange} /></Flex>
}

Filter.propTypes = {
    text: PropTypes.string.isRequired,
}