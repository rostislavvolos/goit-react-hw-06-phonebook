import styles from './ContactList.module.css';
// import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contacts/contactsAction';
import { useDispatch, useSelector } from 'react-redux';
// import phonebookActions from '../../redux/contacts/contactsAction';

function ContactList () {
  const dispatch = useDispatch();
  const items = useSelector( state => state.contacts.items)
  const filter = useSelector( state => state.contacts.filter)
  const removeContact = (id) => dispatch(deleteContact(id))
  
  const contacts = items.filter((contact) => {
   return (contact.name.toLowerCase().includes(filter.toLowerCase()))
  })
  
  // console.log(contact.name.toLowerCase().includes(filter.toLowerCase()))
   

    return (
      <div>
        <ul className={styles.list}>
          {contacts.map(contact => (
            <li key={contact.id} className={styles.list_li}>
              <span className={styles.span}>{contact.name}</span>
              <span className={styles.span}>{contact.number}</span>
              <button
                type="button"
                id={contact.id}
                onClick={() => removeContact(contact.id)}
                className={styles.button}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }


  export default ContactList;