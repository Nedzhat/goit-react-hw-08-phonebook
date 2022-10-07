import { Box, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <Box as="header" bg='cyan.500' p={5}>
            <Box as="nav" display='flex' justifyContent='space-around'>
                <Box display='flex' gap='20px'>
                    <NavLink to="/"
                        style={{ textDecoration: 'none' }}
                    ><Text as='b' color='white' style={{ textTransform: 'uppercase'}}>Home</Text>
                    </NavLink>
                    <NavLink to="/contacts"><Text as='b' color='white' style={{ textTransform: 'uppercase'}}>Contacts</Text></NavLink>
                </Box>
                <Box display="flex" gap='20px'>
                    <NavLink to="/register"><Text as='b' color='white' style={{ textTransform: 'uppercase'}}>Register</Text></NavLink>
                    <NavLink to="/login"><Text as='b' color='white' style={{ textTransform: 'uppercase'}}>Log in</Text></NavLink>
                </Box>
            </Box>
        </Box>
    )
};