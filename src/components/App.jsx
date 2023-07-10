import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/filter';
import { ContactListItem } from './ContactListItem/ContactListItem';
// // import AddContact from './AddContact/AddContact';
// import ContactList from './ContactList/ContactList';
// import ContactListElement from 'components/ContactListElement/ContactListElement';
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';

// Component - ContactForm -START
// class ContactForm extends Component {
//   idNanoid = nanoid();
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     const { id, name, value } = e.target;
//     this.setState(prevState => ({
//       ...prevState,
//       [name]: value,
//       id,
//     }));
//     console.log('handleChange', e.target.value);
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.addContact(this.state);
//     console.log(`Dane zostały wysłane ${JSON.stringify(this.state)}`);
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor={this.idNanoid}>Name</label>
//         <input
//           onChange={this.handleChange}
//           id={this.idNanoid}
//           value={this.state.name}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа]+(([' \-][a-zA-Zа])?[a-zA-Zа]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//         <label htmlFor={this.idNanoid}>Number</label>
//         <input
//           onChange={this.handleChange}
//           id={this.idNanoid}
//           value={this.state.number}
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }
// ContactForm.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.number,
// };
// Component - ContactForm - END

// Component - ContactList -START
// class ContactList extends Component {
//   render() {
//     const { contacts, deleteContact, filter } = this.props;
//     console.log('contacts i filter', contacts, filter);
//     if (filter === '') {
//       return (
//         <div>
//           <ul>
//             {contacts.map((contact, index) => (
//               <ContactListItem
//                 key={index}
//                 contact={contact}
//                 deleteContact={deleteContact}
//               />
//             ))}
//           </ul>
//         </div>
//       );
//     } else {
//       const filteredContacts = contacts.filter(contact =>
//         contact.name.toLowerCase().includes(filter.toLowerCase())
//       );
//       return (
//         <ul>
//           {filteredContacts.map((contact, index) => (
//             <ContactListItem
//               key={index}
//               contact={contact}
//               deleteContact={deleteContact}
//             />
//           ))}
//         </ul>
//       );
//     }
//   }
// }
// Component ContactsList - END
// Component Filter - START
// class Filter extends Component {
//   state = {
//     filter: '',
//   };
//   render() {
//     const { state } = this.props;
//     return (
//       <div>
//         <label>
//           Find contacts by name
//           <input
//             onChange={this.props.handleFilter}
//             type="text"
//             name="filter"
//             title="Filter contacts"
//             value={this.props.filter}
//           />
//           {console.log('input-this.props.filter', this.state.filter)}
//         </label>
//       </div>
//     );
//   }
// }
// Component Filter - END
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
    // this.state.filter(name, console.log(name));
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

// {/* <div>
// <h1>Phonebook</h1>
// <ContactForm />
// <h2>Contacts</h2>
// <Filter />
// <ContactList>
// </ContactList>
// </div> */}
