import { useState } from 'react';

import css from 'components/form/form.module.css';
import { useContacts } from 'redux/contacts/useContacts';
import { useDispatch } from 'react-redux';

export const Form = () => {
  const { contacts, addContact } = useContacts();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    const existContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));

    reset();
  };

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>

      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </label>

      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;
