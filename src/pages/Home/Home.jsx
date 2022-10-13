import { Box, Icon } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons"
import { useAuth } from "hooks/useAuth";
import { NotLoggedIn } from "components/NotLoggedIn/NotLoggedIn";
import { LoggedIn } from "components/LoggedIn/LoggedIn";

const Home = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Box as="main" display='flex' justifyContent='center' p={5}>
            <Box>
                {isLoggedIn ? <LoggedIn/> : <NotLoggedIn/>}
                <Box display='flex' justifyContent='center' p={14}>
                    <Icon as={EditIcon} w={200} h={200} color='cyan.500' />
                </Box>
            </Box>
        </Box>
    )
};

export default Home;