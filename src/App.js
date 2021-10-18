import  { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Contact from './ContactList/Contact';
import Filter from './Filter';

import { v4 as uuidv4 } from 'uuid';

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const deleteContact = id => {
   setContacts(state => state.filter(contact => contact.id !== id));
  };

  const formSubmitHandler = data => {
    
    const { name } = data;
    const contactId = uuidv4();
    const newContact = { ...data, id: contactId };
    const isNotUniqueContact = contacts.some(contact =>
      contact.name.includes(name),
    );

    if (isNotUniqueContact) {
      window.alert(`${name} is already in contacts`);
      return;
    }

    setContacts(state => [...state, newContact]);
  };

  const changeFilter = e => {
    setFilter( e.currentTarget.value);
  };

  const filterContacts = () => {
   

    return [...contacts].filter(({ name }) =>
      name.toLowerCase().includes(filter),
    );
  };

 
    const filteredContacts = filterContacts();

    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />
        <h2 className="title">Contacts</h2>
        <Filter onChange={changeFilter} filter={filter} />

        <ContactList deleteContact={deleteContact}>
          {filteredContacts.map(contact => {
            const contactId = uuidv4();

            return (
              <Contact
                key={contactId}
                contact={contact}
                deleteContact={deleteContact}
              />
            );
          })}
        </ContactList>
      </div>
    );
  }

export default App;
