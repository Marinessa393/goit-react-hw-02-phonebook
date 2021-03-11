import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  handleChangeFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  handleRemove = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <div className="Container">
          <section title="Phonebook" className="Phonebook__section">
            <h1 className="Phonebook__title">Phonebook</h1>
            <ContactForm contacts={contacts} onSubmit={this.addContact} />
          </section>
          <section title="Contacts" className="Contacts">
            <h2 className="Contacts__title">Contacts</h2>
            <Filter value={filter} onChangeFilter={this.handleChangeFilter} />
            <ContactList
              filteredContacts={this.getFilteredContacts()}
              onRemove={this.handleRemove}
            />
          </section>
        </div>
      </>
    );
  }
}

export default App;
