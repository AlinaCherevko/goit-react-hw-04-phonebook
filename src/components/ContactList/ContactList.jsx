import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ users, deleteUser }) => {
  return (
    <div>
      {users.map(user => (
        <div key={user.id} className={css.wrapper}>
          <p>
            {user.userName}:{user.userNumber}
          </p>
          <button onClick={() => deleteUser(user.id)} type="button">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
