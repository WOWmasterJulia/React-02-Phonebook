import { nanoid } from "nanoid";
import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css'

const INITIAL_STATE = {
  name: "",
  number:"",
};
const nameInputId = nanoid();
const numberInputId = nanoid();

export class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  // Отвечает за обновление состояния
    handleChange = evt => {
    const { name, value } = evt.target;  
    this.setState({ [name]: value });
  };

  // Вызывается при отправке формы
  handleSubmit = evt => {
    evt.preventDefault();
   const { name, number } = this.state;
   // console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
    const temp = {
      id: nanoid(3),
      name: name,
      number: number,
    }
  //  console.log("temp", temp)
    this.setState({contacts : this.state.contacts})
    this.props.getContact( temp );
//    this.reset();
    this.setState({ ...INITIAL_STATE });
  };
  
  reset = () => {
    this.setState({ ...INITIAL_STATE });
    };


  render() {
    const { name, number } = this.state;

    return (
        <form className={css.contactForm } onSubmit={this.handleSubmit}>
        <label htmlFor={nameInputId} className={css.labelForm}>Name</label>
        <input
            id={nameInputId}
            className={css.labelInput}
            type="text"
            name="name"
            value={name}
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
        />
        <label htmlFor={numberInputId} className={css.labelForm}>Number</label>
        <input
            id={numberInputId}
            className={css.labelInput}
            type="tel"
            name="number"
            value={number}
            placeholder="Enter phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        <button className={css.btnForm} type="submit">Add contact</button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  getContact: PropTypes.func.isRequired,
  }