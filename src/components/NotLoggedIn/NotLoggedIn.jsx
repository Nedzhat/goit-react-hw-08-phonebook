import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react";

export const NotLoggedIn = () => {
    return (
        <Box>
            <Text fontSize='3xl' textAlign="center">
                Hello new user!
            </Text>
            <Text fontSize='2xl' textAlign="center">
                You can use this <Text display='inline-block' as='u' color='cyan.500'>feature:</Text>
            </Text>
            <Text fontSize='xl' textAlign="center" mb="4">but you have to log in or create new account!</Text>
            <List spacing={6}>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color='cyan.500' />
                    Register and your contacts always with you!
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color='cyan.500' />
                    Add, delete and find your contact.
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color='cyan.500' />
                    Any device save your contacts.
                </ListItem>
            </List>
        </Box>
    )
};