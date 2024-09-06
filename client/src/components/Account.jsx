import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Account() {
	return (
    <div>
      <h2>Личный кабинет</h2>
      <p>У вас уже есть аккаунт? <NavLink to="/login">Аккаунт</NavLink> или хотите <NavLink to="/register">зарегаться</NavLink>?</p>
    </div>
  );
}
