import React from 'react';
import styles from './App.module.css';
import Form from '../AddContactsForm/AddContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import { useState } from 'react';
import { ToastContainer } from 'react-toast';
import { useGetContactsQuery } from 'redux/services';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';

const App = () => {
  const [filter, setFilter] = useState('');

  const { data, isLoading } = useGetContactsQuery();

  const filteredContacts = data?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <Form contacts={filteredContacts} />
        <Filter filter={filter} onChange={setFilter} />
        {isLoading && <Loader size={'40'} />}
        {filteredContacts && <ContactsList contacts={filteredContacts} />}
        <ToastContainer delay={3000} position={'top-left'} />
      </div>
    </>
  );
};

export default App;
