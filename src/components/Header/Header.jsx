import { Box, Center, Divider, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <Box as="header" bg='cyan.500'>
            <nav>
                <Box display='flex'>
                    <a
                        style={{ textDecoration: 'none' }}
                        state={{ from: "/" }}
                    ><Text>Home</Text>
                    </a>
                    <Text>Contacts</Text>
                </Box>
                <Text>Registr</Text>
                <Text>Log in</Text>
            </nav>
            <Center height='30px'>
                <Divider orientation='horizontal' />
            </Center>
        </Box>
    )
};