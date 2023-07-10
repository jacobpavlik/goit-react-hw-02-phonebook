import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilter = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({ ...prevState, [name]: value }));
    console.log('handleFilter', e.target.value);
  };

  addContact = newContact => {
    console.log('newContact', newContact);
    if (
      newContact.name !== '' &&
      this.state.contacts.find(contact => contact.name === newContact.name)
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    console.log('Dodajemy nasz kontakt', this.state.contacts);
  };

  deleteContact = index => {
    console.log('Usuwanie kontaktu', index);
    this.setState(prevState => {
      const updateContacts = [...prevState.contacts];
      updateContacts.splice(index, 1);
      return { contacts: updateContacts };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts </h2>
        <Filter handleFilter={this.handleFilter} filter={this.state.filter} />
        <ContactList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
          filter={this.state.filter}
        />
      </div>
    );
  }
}
