import React from 'react';
import styles from './Filter.module.css';
import { selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <div className={styles.form}>
      <label className={styles.label}>
        Filter
        <input
          value={filter}
          className={styles.input}
          type="text"
          onChange={e => dispatch(setFilterValue(e.currentTarget.value))}
        />
      </label>
    </div>
  );
};

export default Filter;
