import { useState, useEffect } from 'react';
import './App.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import initialContacts from '../../assets/contacts.json';

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('saved-contact')) ?? initialContacts
  );
  const [search, setSearch] = useState('');
  useEffect;
  () => localStorage.setItem('saved-contact', JSON.stringify(contacts), [contacts]);

  const addContact = newContact => {
    setContacts(prev => [...prev, newContact]);
  };

  const deleteContact = contactsId => {
    setContacts(prev => prev.filter(({ id }) => id !== contactsId));
  };
  const handleSearchChange = value => {
    setSearch(value.trim());
  };

  const findContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContact} />
      <SearchBox onSearch={search} setSearch={handleSearchChange} />
      <ContactList contacts={findContact} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
