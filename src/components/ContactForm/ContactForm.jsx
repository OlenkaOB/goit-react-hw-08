import s from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <form className={s.ContactForm}>
      <label className={s.labelForm}>
        <span className={s.spanForm}>Name</span>
        <input className={s.inputForm} type="text" />
      </label>
      <label className={s.labelForm}>
        <span className={s.spanForm}>Number</span>
        <input className={s.inputForm} type="text" />
      </label>

      <button className={s.btnForm} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;
