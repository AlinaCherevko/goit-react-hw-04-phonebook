import React, { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ addNewName }) => {
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');

  const formSubmit = e => {
    e.preventDefault();
    // const userName = userName;
    // const userNumber = userNumber;
    // const userName = e.currentTarget.elements.name.value;
    // const userNumber = e.currentTarget.elements.number.value;
    const formData = {
      userName,
      userNumber,
    };
    // console.log(formData);
    addNewName(formData);
    //контрольовано очищуємо вміст форми:
    setUserName('');
    setUserNumber('');

    //очищуємо неконтрольовану форму:
    // e.currentTarget.reset();
  };
  //Напишимо метод що контролює поля форм і змінює стан:
  const onChangeInputForm = ({ target: { name, value } }) => {
    switch (name) {
      case 'userName':
        setUserName(value);
        break;
      case 'userNumber':
        setUserNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={css.form} onSubmit={formSubmit}>
      <div className={css.divWrapper}>
        <label htmlFor="" className={css.label}>
          Name
        </label>
        <input
          onChange={onChangeInputForm}
          value={userName}
          type="text"
          name="userName"
          className={css.input}
          required
        />
      </div>
      <div className={css.divWrapper}>
        <label htmlFor="" className={css.label}>
          Number
        </label>
        <input
          onChange={onChangeInputForm}
          value={userNumber}
          type="number"
          name="userNumber"
          className={css.input}
          required
        />
      </div>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
