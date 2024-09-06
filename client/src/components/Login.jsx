import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password
      });
      localStorage.setItem('token', response.data.token);
      navigate('/account');
    } catch (error) {
      console.error('Login error:', error);
      alert('Ошибка входа');
    }
  };

  return (
    <div>
      <h2>Вход</h2>
      <input type="text" placeholder="Почта" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
}
