import { useId } from 'react';
import s from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { findContact } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.name);
  const contactsId = useId();
  return (
    <>
      <div className={s.container}>
        <label className={s.labelSearch} htmlFor={contactsId}>
          Find contacts by name
        </label>
        <input
          className={s.inputSearch}
          type="text"
          id={contactsId}
          value={filter}
          onChange={e => dispatch(findContact(e.target.value))}
        />
      </div>
    </>
  );
};
export default SearchBox;
