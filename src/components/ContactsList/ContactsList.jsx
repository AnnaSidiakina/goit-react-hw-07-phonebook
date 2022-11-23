import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Contacts</h2>
        <ul className={styles.list}>
          {contacts.map(({ id, name, number }) => (
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
