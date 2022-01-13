import { useState } from "react";
import style from './FormStyle.module.css';
// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import phonebookActions, { addContact } from '../../redux/contacts/contactsAction';


// const initialState = {
//   number: "",
//   name:"",
// }
const Form = () => {
const [contact, setContact] = useState({name:'', number:''})
const dispatch = useDispatch();


const items = useSelector(state => state.contacts.items)

const {name, number} = contact;



  const handleChange = event => {
    const { name, value } = event.target;
    setContact({...contact, [name]: value });
  };

   const handleSubmit = event => {
    event.preventDefault();
    if (
      items.some((item) => item.name.toLowerCase() === contact.name.toLowerCase())
    ) {
      alert('uzhe ye take')
      setContact({...contact, name: ''})
    } else {
      dispatch(addContact(contact))
      setContact({name:'', number:''});
    }
   
  };

    return (
      <form onSubmit={handleSubmit} action="">
        <p className={style.nameTitle}>Name</p>
        <label>
          <input
            name="name"
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </label>
        <p className={style.numberTitle}>Number</p>
        <label htmlFor="">
          <input
            name="number"
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>
        <div>
          <button type="submit" className={style.button}>Add contact</button>
        </div>
      </form>
    );
  }

  export default Form;