import style from './FilterList.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch} from 'react-redux';
import { filterContacts } from '../../redux/contacts/contactsAction';


function FilterList () {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.value);
  const onChange = event => dispatch(filterContacts(event.target.value))



    return (
        <label className={style.label}>
         Find contact by name
         <input type="text" value={filter} name="filter" onChange={onChange}/>
        </label>
    )
}
  
  export default FilterList;