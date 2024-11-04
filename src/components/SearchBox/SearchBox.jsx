import s from './SearchBox.module.css';

const SearchBox = () => {
  return (
    <>
      <label className={s.labelSearch}>
        <span className={s.spanSearch}>Find contacts by name</span>
        <input className={s.inputSearch} type="text" />
      </label>
    </>
  );
};
export default SearchBox;
