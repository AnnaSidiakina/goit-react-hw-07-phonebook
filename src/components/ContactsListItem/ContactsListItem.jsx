import { useDeleteContactMutation } from 'redux/services';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import styles from './ContactsListItem.module.css';
import { toast } from 'react-toast';

export const ContactsListItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const handleClick = () => {
    deleteContact(id);
    toast.success('The contact has been successfully deleted');
  };
  return (
    <li className={styles.item}>
      <span className={styles.text}>{name}</span>
      <span className={styles.number}>{phone}</span>
      <button
        className={styles.button}
        disabled={isDeleting}
        onClick={handleClick}
      >
        {isDeleting && <Loader size={'10'} />}Delete
      </button>
    </li>
  );
};
ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
};
