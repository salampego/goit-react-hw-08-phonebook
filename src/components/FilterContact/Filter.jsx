import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/sliceContact';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    const { value } = e.currentTarget;
    dispatch(filterContact(value.toLowerCase()));
  };

  return (
    <label>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={handleFilter}
        placeholder={'Filter Contact'}
      />
    </label>
  );
};
