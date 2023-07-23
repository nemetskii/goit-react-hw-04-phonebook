import React from 'react';
import AddContactForm from './AddContactForm/AddContactForm.js';
import ContactList from './ContactList/ContactList.js';
import Filter from './Filter/Filter.js';
import { nanoid } from 'nanoid';

export default class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = formState => {
    const { name, number } = formState;
    const contact = { name: name, number: number, id: nanoid(4) };
    let isNameInContatcs = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isNameInContatcs) {
      alert('Такое имя уже существует в контактах');
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  changeFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
        <AddContactForm onAddContact={this.addContact} />
        <h2 style={{ textAlign: 'center' }}>Contacts</h2>
        <Filter changeValue={this.changeFilter} value={this.state.filter} />
        <ContactList
          contacts={filteredContacts}
          onFilterChange={this.updateInputState}
          onDeleteButton={this.deleteContact}
        />
      </div>
    );
  }
}
