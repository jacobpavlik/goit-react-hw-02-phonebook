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
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
      // id,
    }));
    console.log('handleChange', e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    // alert(`Dane zostały wysłane ${JSON.stringify(this.state)}`);
    if (e.target.value === this.state.name) {
      alert(`${this.state.name} is already in contacts.`);
      return;
    } else {
      this.props.addContact(this.state);
      console.log(`Dane zostały wysłane ${JSON.stringify(this.state)}`);
    }
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
        <label htmlFor={this.idNanoid}>Number</label>
        <input
          onChange={this.handleChange}
          id={this.idNanoid}
          value={this.state.number}
          type="tel"
          name="number"
          //  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
          {this.props.contacts.map(({ name, number }, index) => (
            <li key={index}>
              {name}: {number}
              <span>
                <button onClick={() => this.props.deleteContact(index)}>
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class Filter extends Component {
  state = {
    filter: '',
  };
  handleFilter = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({ ...prevState, [name]: value }));
    console.log('handleFilter', e.target.value);
    // this.state.filter(name, console.log(name));
  };

  // const filtered = this.state.filter.filter((name) => {
  //   return this.state.filter === name.target.value;
  // this.setState(prevState => {
  //   return { filter: e.target.value };
  // });
  // console.log('this.state.filter.value', this.state.filter.value);
  // console.log('this.props.name', this.props.name);
  // console.log('koniec');
  // console.log(e.target.value);

  // if (this.props.name === this.state.filter.value) {
  //   console.log("this.props.name", this.props.name)
  //   console.log("this.state.filter.value", this.state.filter.value)
  // }} else {console.log("nie jest this.props.name", this.props.name, "this.state.filter.value", this.state.filter.value )

  render() {
    return (
      <div>
        <label>
          Find contacts by name
          <input
            onChange={this.handleFilter}
            type="text"
            name="filter"
            title="Filter contacts"
            value={this.state.filter}
          />
          {console.log(this.state.filter)}
        </label>
        {/* <div>
          {this.state.value
            .filter(contacts => this.state.name)
            .map(filteredContacts => (
              <li>{filteredContacts.name}</li>
            ))}
        </div> */}
      </div>
    );
  }
}

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };
  addContact = newContact => {
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
        <Filter />
        <ContactList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
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
