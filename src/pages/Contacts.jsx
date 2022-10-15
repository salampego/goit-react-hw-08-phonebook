import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactsList';
import { Filter } from 'components/FilterContact/Filter';
import s from './Contacts.module.css';

export default function Contacts() {
  return (
    <div className={s.container}>
      <div className={s['form-container']}>
        <ContactForm />
      </div>
      <Filter />
      <ContactList />
    </div>
  );
}
