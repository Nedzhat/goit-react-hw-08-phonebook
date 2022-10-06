import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectVisibleContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operation';
import { Routes, Route } from "react-router-dom";

import { Box, Divider } from '@chakra-ui/react';


import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';
import { MainTitle, SecondTitle } from './App.styled';
import { Header } from './Header/Header';
import { SharedLayout } from './SharedLayout';
import { Home } from 'pages/Home/Home';
import { Contacts } from 'pages/Contacts/Contacts';
  
export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
    
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route element={<Contacts /> } />
      </Route>
    </Routes>
    // <Box m="50px auto 50px" p="30px" w="500px" h="100%" boxShadow="0px 4px 24px -1px rgba(0,0,0,0.75)" borderRadius="15px" backgroundColor="bgTable">
    //   <Header />
    //   <Divider/>
    //   <MainTitle>Phonebook</MainTitle>
    //   <ContactForm />
    //   <SecondTitle>Contacts</SecondTitle>
    //   <Filter text="Find contacts by name" />
    //   {isLoading && !error && <Loader />}
    //   {contacts.length === 0 && !isLoading ? <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}><h2>Add your first friend!</h2></div>
    //     : <ContactList contacts={contacts} />}
    // </Box>
    )

};