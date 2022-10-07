import { Box, Icon, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { CheckCircleIcon, EditIcon } from "@chakra-ui/icons"

export const Home = () => {
    return (
        <Box as="main" display='flex' justifyContent='center' p={5}>
            <Box>
                <Text fontSize='3xl' textAlign="center">
                    Hello new user! 
                </Text>
                <Text fontSize='2xl' textAlign="center" mb="4">
                    You can use this <Text display='inline-block' as='u' color='cyan.500'>feature:</Text>
                </Text>
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
                <Box display='flex' justifyContent='center' p={14}>
                    <Icon as={EditIcon} w={200} h={200} color='cyan.500'/>
                </Box>
            </Box>
        </Box>
    )
};