import { Box, Icon, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { CheckCircleIcon, EditIcon } from "@chakra-ui/icons"

export const Home = () => {
    return (
        <Box as="main" display='flex' justifyContent='center'>
            <Box>
                <Text fontSize='3xl' textAlign="center">
                    Hello new user! 
                </Text>
                <Text fontSize='2xl' textAlign="center" mb="2">
                    You can use this feature:
                </Text>
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color='green.500' />
                        Register and your contacts always with you!
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color='green.500' />
                        Add, delete and find your contact. 
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color='green.500' />
                        Any device save your contacts.
                    </ListItem>
                </List>
                <Box display='flex' justifyContent='center' p={5}>
                    <Icon as={EditIcon} w={150} h={150} color='cyan.500'/>
                </Box>
            </Box>
        </Box>
    )
};