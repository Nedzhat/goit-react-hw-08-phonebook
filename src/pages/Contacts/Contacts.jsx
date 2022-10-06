import { Box } from "@chakra-ui/react";
import { MainTitle } from "components/App.styled";
import { ContactForm } from "components/ContactForm/ContactForm";

export const Contacts = () => {
    return (<Box>
        <MainTitle />
        <ContactForm />
    </Box>
    )
};