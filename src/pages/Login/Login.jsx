import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operation";

const Login = () => {
    const [show, setShow] = useState(false);
    
    const handleClick = () => setShow(!show);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        dispatch(logIn({
            email,
            password,
        }))
        e.target.reset();
    }

    return (
        <Box m="0 auto" w='500px' p={5}>
            <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                    <Stack spacing='10px' mb='20px'>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" name="email" id='124115153' focusBorderColor='cyan.500' placeholder='Email' />
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

export default Login;