import PropTypes from 'prop-types';
// import css from './ContactList.module.css';
// import { Button } from '../button/Button';

export const ContactListItem = ({ contact, deleteContact, index }) => (
  <li>
    <div>
      <p>{contact.name}</p>
      <p> {contact.number}</p>
    </div>
    <span>
      <button onClick={() => deleteContact(index)}>Delete</button>
    </span>
  </li>
);

//Piotr
// import PropTypes from 'prop-types';
// import css from './ContactList.module.css';
// import { Button } from '../button/Button';

// const ContactListItem = ({ contact, action }) => (
//   <li className={css.item}>
//     <div className={css.items_leftside}>
//       <p className={css.info}>{contact.name}:</p>
//       <a className={css.link} href={'tel:+' + contact.number}>
//         {contact.number}
//       </a>
//     </div>
//     <Button label="Delete" action={action} formButton={false} id={contact.id} />
//   </li>
// );

//moje
// class ContactList extends Component {
//     render() {
//       const { contacts, deleteContact, filter } = this.props;
//       console.log('contacts i filter', contacts, filter);
//       if (filter === '') {
//         return (
//           <div>
//             <ul>
//               {contacts.map((contact, index) => (
//                 <li key={index}>
//                   <span>{contact.name}</span>
//                   <span>{contact.number}</span>
//                   {/* {name}: {number} */}
//                   deleteContact={deleteContact}
//                   <span>
//                     <button onClick={() => deleteContact(index)}>Delete</button>
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         );
//       } else {
//         return 'To jak filter nie jest pusty';
//         // const filteredContacts = contacts.filter(contact =>
//         //   contact.name.toLowerCase().includes(filter.toLowerCase())
//         // );
//       }
//     }
//   }
