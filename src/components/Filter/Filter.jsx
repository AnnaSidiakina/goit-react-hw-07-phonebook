import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
  return (
    <div className={styles.form}>
      <label className={styles.label}>
        Filter
        <input
          value={filter}
          className={styles.input}
          type="text"
          onChange={e => onChange(e.currentTarget.value)}
        />
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
