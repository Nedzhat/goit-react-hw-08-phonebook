import { Box, Text } from "@chakra-ui/react";
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks/useAuth";
import { NavLink } from "react-router-dom";

export const Header = () => {
    
    const { isLoggedIn } = useAuth();

    return (
        <Box as="header" bg='cyan.500' p={5}>
            <Box as="nav" display='flex' w='1000px' justifyContent='space-between' m='0 auto'>
                <Box display='flex' gap='20px'>
                    <NavLink to="/"
                        style={{ textDecoration: 'none' }}
                    ><Text as='b' color='white' style={{ textTransform: 'uppercase' }}>Home</Text>
                    </NavLink>
                    {isLoggedIn && <NavLink to="/contacts"><Text as='b' color='white' style={{ textTransform: 'uppercase' }}>Contacts</Text></NavLink>}
                </Box>
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </Box>
        </Box>
    )
};