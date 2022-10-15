import Notiflix from 'notiflix';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operationsContact';
// import { addContact } from 'redux/operations';
import { getItems } from 'redux/selectors';
import s from './ContactForm.module.css';
export function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(getItems);

  const inputCorrect = e => {
    const value = e.target.value;
    const name = e.target.name;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;

      default:
    }
    return;
  };

  const onSubmit = e => {
    e.preventDefault();
    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      Notiflix.Notify.failure(`${name}, is already in your contacts`);
      return;
    }
    dispatch(addContact({ name, number: phone }));
    Notiflix.Notify.success(`Add a new contact ${name}`);
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };
  return (
    <form onSubmit={onSubmit} className={s.form}>
      <label>
        <p> Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={inputCorrect}
          value={name}
          placeholder={'Contact name'}
          required
        />
      </label>
      <label>
        <p> Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={phone}
          onChange={inputCorrect}
          placeholder={'Phone Number'}
          required
        />
      </label>
      <br />
      <button type="submit" className={s['btn-form']}>
        Add contact
      </button>
    </form>
  );
}
