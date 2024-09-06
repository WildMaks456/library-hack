import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
	const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/registration', {
        username,
        password,
        email,
        phone
      });

      alert(response.data.message);
      navigate('/account');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Ошибка регистрации');
    }
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <input type="text" placeholder="Имя пользователя" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <input type="email" placeholder="Почта" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="text" placeholder="Телефон" value={phone} onChange={(e) => setPhone(e.target.value)}/>
      <button onClick={handleRegister}>Зарегаться</button>
    </div>
  );
}

