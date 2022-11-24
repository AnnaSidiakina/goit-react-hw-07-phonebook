import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const myFilter = useSelector(selectFilter);

  const normalizedFilter = myFilter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      {filteredContacts.length === 0 && <p>There are no contacts yet</p>}
      {filteredContacts.length > 0 && (
        <div className={styles.container}>
          <h2 className={styles.title}>Contacts</h2>
          <ul className={styles.list}>
            {filteredContacts.map(({ id, name, number }) => (
              <li key={id} className={styles.item}>
                <span className={styles.text}>{name}</span>
                <span className={styles.number}>{number}</span>
                <button
                  className={styles.button}
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

ContactsList.propTypes = {
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

export default ContactsList;
