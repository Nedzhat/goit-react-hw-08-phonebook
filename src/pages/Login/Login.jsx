import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import { useState } from "react";

export const Login = () => {
    const [show, setShow] = useState(false);
    
    const handleClick = () => setShow(!show);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        e.target.reset();
    }

    return (
        <Box m="0 auto" w='500px' p={5}>
            <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                    <Stack spacing='10px' mb='20px'>
                        <FormLabel>Username</FormLabel>
                        <Input name="name" id='124115153' focusBorderColor='cyan.500' placeholder='Username' />
                        <FormLabel>Password</FormLabel>
                        <InputGroup size='md'>
                            <Input
                                id="11234412"
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Password'
                                focusBorderColor='cyan.500'
                                name="password"
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Stack>
                    <Button type="submit" colorScheme='cyan' display="block" m='0 auto' color='white' style={{ textTransform: 'uppercase'}}>Log In</Button>
                </FormControl>
            </form>
        </Box>
    )
};