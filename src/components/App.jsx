import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addNewName = formData => {
    const avoidRepitition = contacts.some(
      contact => contact.userName === formData.userName
    );
    if (avoidRepitition) {
      alert(`${formData.userName} is already exist!`);
      return;
    }

    const finalProfile = {
      ...formData,
      id: nanoid(),
    };

    setContacts(prevState => [...prevState, finalProfile]);
  };

  const handleChangeForm = e => {
    const value = e.currentTarget.value;
    setFilter(value);
  };
  const deleteUser = userId => {
    setContacts(contacts.filter(contact => contact.id !== userId));
  };

  //шукаємо підрядок у рядку, далі ми передамо цей об,єкт у рендер
  const filteredContact = contacts.filter(user =>
    user.userName.toLowerCase().includes(filter.trim().toLowerCase())
  );
  console.log(filteredContact);
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm addNewName={addNewName} />
      <h2>Contacts</h2>
      <Filter handleChangeForm={handleChangeForm} value={filter} />
      <ContactList users={filteredContact} deleteUser={deleteUser} />
    </div>
  );
};
