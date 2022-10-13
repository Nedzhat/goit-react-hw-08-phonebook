import { Box, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const AuthNav = () => {
    return (
        <Box display='flex' gap='20px'>
            <NavLink to="/register"><Text as='b' color='white' style={{ textTransform: 'uppercase' }}>Register</Text></NavLink>
            <NavLink to="/login"><Text as='b' color='white' style={{ textTransform: 'uppercase' }}>Log in</Text></NavLink>
        </Box>
    )
};