import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filtersSlice';
import { selectContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContscts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <ul className={s.list}>
        {filteredContscts.map(contact => (
          <li className={s.listItem} key={contact.id}>
            <Contact id={contact.id} name={contact.name} number={contact.number} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
