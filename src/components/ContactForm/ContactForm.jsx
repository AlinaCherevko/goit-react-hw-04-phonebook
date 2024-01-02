import React, { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    userName: '',
    userNumber: '',
  };

  formSubmit = e => {
    e.preventDefault();
    const userName = this.state.userName;
    const userNumber = this.state.userNumber;
    // const userName = e.currentTarget.elements.name.value;
    // const userNumber = e.currentTarget.elements.number.value;
    const formData = {
      userName,
      userNumber,
    };
    // console.log(formData);
    this.props.addNewName(formData);
    //контрольовано очищуємо вміст форми:
    this.setState({ userName: '', userNumber: '' });
    //очищуємо неконтрольовану форму:
    // e.currentTarget.reset();
  };
  //Напишимо метод що контролює поля форм і змінює стан:
  onChangeInputForm = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.formSubmit}>
        <div className={css.divWrapper}>
          <label htmlFor="" className={css.label}>
            Name
          </label>
          <input
            onChange={this.onChangeInputForm}
            value={this.state.userName}
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
            onChange={this.onChangeInputForm}
            value={this.state.userNumber}
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
  }
}
