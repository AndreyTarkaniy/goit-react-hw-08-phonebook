// import { Container } from 'components/container/container';
// import Form from 'components/form/form';
// import ContactsList from 'components/contactsList/contactsList';
// import Filter from 'components/filter/filter';
// import { useDispatch } from 'react-redux';
// import { getContactsThunk } from 'redux/contacts/thunkApi';
// import { useEffect } from 'react';
// import { useContacts } from 'redux/contacts/useContacts';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import Home from 'pages/Home';
import { Register } from 'pages/Register';

export const App = () => {
  // const { isLoading, error } = useContacts();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getContactsThunk());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );

  // return (

  //   <Container>
  //     <h1>Phonebook</h1>
  //     <Form />

  //     <h2>Contacts</h2>
  //     <Filter />
  //     {isLoading && !error && <b>Request in progress...</b>}
  //     <ContactsList />
  //   </Container>
  // );
};
