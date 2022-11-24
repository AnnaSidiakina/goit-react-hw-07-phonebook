import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';

const ContactsList = ({ contacts }) => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Contacts</h2>

        <ul className={styles.list}>
          {contacts.map(contact => (
            <ContactsListItem key={contact.id} {...contact} />
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
