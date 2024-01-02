import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addNewName = formData => {
    const avoidRepitition = this.state.contacts.some(
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

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, finalProfile],
      };
    });
  };

  handleChangeForm = e => {
    const value = e.currentTarget.value;
    this.setState({ filter: value });
  };
  deleteUser = userId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== userId),
    });
  };
  render() {
    //шукаємо підрядок у рядку, далі ми передамо цей об,єкт у рендер
    const filteredContact = this.state.contacts.filter(user =>
      user.userName
        .toLowerCase()
        .includes(this.state.filter.trim().toLowerCase())
    );
    console.log(filteredContact);
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm addNewName={this.addNewName} />
        <h2>Contacts</h2>
        <Filter
          handleChangeForm={this.handleChangeForm}
          value={this.state.filter}
        />
        <ContactList users={filteredContact} deleteUser={this.deleteUser} />
      </div>
    );
  }
}
