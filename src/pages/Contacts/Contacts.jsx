import { useSelector } from "react-redux";
import { Box, Heading } from "@chakra-ui/react";

import { selectContacts, selectError, selectIsLoading, selectVisibleContacts } from "redux/selectors";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { Plug } from "components/Plug/Plug";

export const Contacts = () => {
    const contacts = useSelector(selectContacts);
    const contactsFilter = useSelector(selectVisibleContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    
    return (
        <Box w='1200px' m='0 auto'>
            <Heading as='h2' size='3xl' textAlign='center' m='20px' color='cyan.500' style={{ textTransform: "uppercase" }}>Phonebook</Heading>
            <ContactForm />
            <Heading as='h3' textAlign='center' m='10px' color='cyan.500' style={{ textTransform: "uppercase" }}>Contacts</Heading>
            <Filter text="Find contacts by name" />
            {isLoading && !error && <Loader />}
            {contacts.length === 0 && !isLoading ? <Plug/> : <ContactList contacts={contactsFilter} />}
        </Box>
    )
};