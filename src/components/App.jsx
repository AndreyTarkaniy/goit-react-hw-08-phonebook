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
import { Login } from 'pages/Login';
import { ContactsPage } from 'pages/ContactsPage';

export const App = () => {
  // useEffect(() => {
  //   dispatch(getContactsThunk());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
