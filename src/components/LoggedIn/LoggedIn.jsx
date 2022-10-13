import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { useAuth } from "hooks/useAuth";

export const LoggedIn = () => {
    const { user } = useAuth();
    
    return (
        <Box>
            <Text fontSize='3xl' textAlign="center">
                    Hello {user.name}! 
                </Text>
                <Text fontSize='2xl' textAlign="center" mb="4" color='cyan.500'>
                    {user.email}
                </Text>
                <List spacing={6}>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color='cyan.500' />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, itaque.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color='cyan.500' />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, aliquid.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color='cyan.500' />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quod.
                    </ListItem>
                </List>
        </Box>
    )
};