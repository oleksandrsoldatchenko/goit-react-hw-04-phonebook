import { useState } from 'react';
import { nanoid } from 'nanoid';

import { Form } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';

import useLocalStorage from 'components/LocalStorage/useLocalStorage';

import styled from 'styled-components';

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const formSubmitData = (name, number) => {
    const addContact = { id: nanoid(), name, number };

    const isFindCopyContact = contacts.find(
      el => el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (isFindCopyContact) {
      alert(`${name} is in your Contacts`);
      return;
    }

    const sortArr = [...contacts, addContact].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setContacts(sortArr);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleFilter = () =>
    contacts.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onData={formSubmitData} />
      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={changeFilter} />
      <ContactList
        contacts={getVisibleFilter()}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
}

const Container = styled.div`
  padding: 15px;
`;
