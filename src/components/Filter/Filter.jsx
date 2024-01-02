import React from 'react';
import css from './Filter.module.css';

const Filter = ({ handleChangeForm, value }) => {
  return (
    <div className={css.divWrapper}>
      <label className={css.label}>Find contact by name</label>
      <input
        type="text"
        onChange={handleChangeForm}
        className={css.input}
        value={value}
        placeholder=""
      />
    </div>
  );
};

export default Filter;
