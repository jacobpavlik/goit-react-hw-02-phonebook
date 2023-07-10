import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export class ContactList extends Component {
  render() {
    const { contacts, deleteContact, filter } = this.props;
    console.log('contacts i filter', contacts, filter);
    if (filter === '') {
      return (
        <div>
          <ul>
            {contacts.map((contact, index) => (
              <ContactListItem
                key={index}
                contact={contact}
                deleteContact={deleteContact}
              />
            ))}
          </ul>
        </div>
      );
    } else {
      const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
      return (
        <ul>
          {filteredContacts.map((contact, index) => (
            <ContactListItem
              key={index}
              contact={contact}
              deleteContact={deleteContact}
            />
          ))}
        </ul>
      );
    }
  }
}
ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
  filter: PropTypes.string,
};
