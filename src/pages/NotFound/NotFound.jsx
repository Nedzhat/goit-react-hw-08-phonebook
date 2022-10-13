import { NotAllowedIcon } from "@chakra-ui/icons";
import { Box, Heading } from "@chakra-ui/react";

const NotFound = () => {
    return (
        <Box as='main' w='1200px' m='0 auto' p={20}>
                <Heading as='h2' size='4xl' textAlign='center' color='cyan.500'>404</Heading>
            <Heading as='h3' size='2xl' textAlign='center' color='cyan.500'>Sorry, we couldn't find that page :(</Heading>
            <Box display='flex' justifyContent='center' p={10}>
                <NotAllowedIcon color='cyan.500' w={150} h={150} textAlign='center' />
            </Box>
        </Box>
    );
};

export default NotFound;