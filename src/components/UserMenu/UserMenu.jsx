import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react"
import { useAuth } from "hooks/useAuth"
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operation";

export const UserMenu = () => {
    const { user } = useAuth();
    
    const dispatch = useDispatch();

    const handleLogOut = () => dispatch(logOut());
    

    return (
        <Box display='flex' gap='20px'>
            <Box display='flex' alignItems='center' gap='5px'>
                <StarIcon color='white'/>
                <Text as='b' color='white'>{user.name}</Text>
            </Box>
            <Button size='xs' onClick={handleLogOut}>Log Out</Button>
        </Box>
    )
};