import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
export class ContactForm extends Component {
  idNanoid = nanoid();
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { id, name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
      id,
    }));
    console.log('handleChange', e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    // alert(`Dane zostały wysłane ${JSON.stringify(this.state)}`);
    //
    this.props.addContact(this.state);
    console.log(`Dane zostały wysłane ${JSON.stringify(this.state)}`);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={css.formContainer}>
        <form className={css.formContact} onSubmit={this.handleSubmit}>
          <label className={css.formLabel} htmlFor={this.idNanoid}>
            Name
          </label>
          <input
            className={css.formInput}
            onChange={this.handleChange}
            id={this.idNanoid}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа]+(([' \-][a-zA-Zа])?[a-zA-Zа]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.formLabel} htmlFor={this.idNanoid}>
            Number
          </label>
          <input
            className={css.formInput}
            onChange={this.handleChange}
            id={this.idNanoid}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={css.formButton} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
