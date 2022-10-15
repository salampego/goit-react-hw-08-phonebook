import s from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getItems, getFilter, getLoading } from 'redux/selectors';
import { deleteContact } from 'redux/contacts/operationsContact';

export const ContactList = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  const visibleContact = contacts.filter(filters =>
    filters.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {visibleContact.map(({ id, name, number }) => {
        return (
          <li key={id} className={s['list-contact']}>
            {name} : {number}
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              className={s['btn-delete']}
            >
              {isLoading ? 'Deleting....' : 'Delete'}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
