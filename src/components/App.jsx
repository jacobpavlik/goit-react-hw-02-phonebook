import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
// // import AddContact from './AddContact/AddContact';
// import ContactList from './ContactList/ContactList';
// import ContactListElement from 'components/ContactListElement/ContactListElement';
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';

class ContactForm extends Component {
  idNanoid = nanoid();
  state = {
    name: '',
    // id: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
      // id,
    }));
    console.log(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    // alert(`Dane zostały wysłane ${JSON.stringify(this.state)}`);
    this.props.addContact(this.state);
    console.log(`Dane zostały wysłane ${JSON.stringify(this.state)}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.idNanoid}>Name</label>
        <input
          onChange={this.handleChange}
          id={this.idNanoid}
          value={this.state.name}
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

class ContactList extends Component {
  // state = {
  //   name: '',
  //   id: '',
  // };

  render() {
    return (
      <div>
        <ul>
          {this.props.contacts.map(({ name }, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    console.log('Dodajemy nasz kontakt', this.state.contacts);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts </h2>

        <ContactList contacts={this.state.contacts} />
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
