import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddContactsForm.module.css';
import { useAddContactMutation } from 'redux/services';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toast';
import { useEffect, useState } from 'react';

const Form = ({ contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact, { isLoading, isSuccess }] = useAddContactMutation();

  const handleNameChange = event => {
    setName(event.currentTarget.value);
  };
  const handleNumberChange = event => {
    setNumber(event.currentTarget.value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const form = e.currentTarget;
    const formName = e.currentTarget.elements.name.value;
    const formPhone = e.currentTarget.elements.number.value;
    const contactsName = contacts.map(contact => contact.name.toLowerCase());

    if (contactsName.includes(formName.toLowerCase())) {
      // form.reset();
      return toast.error(`${formName} is already in your list`);
    }
    addContact({
      name: formName,
      phone: formPhone,
    });

    // form.reset();
  };

  // use useEffect so that the success notification shows up only when the contact is added
  useEffect(() => {
    if (isSuccess) {
      toast.success('The contact has been added to your list');
      reset();
    }
  }, [isSuccess]);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.label}>
          Phone number
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleNumberChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? <Loader size={'10'} /> : 'Add contact'}
        </button>
      </form>
    </div>
  );
};
export default Form;

Form.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    PropTypes.array,
  ]),
};
