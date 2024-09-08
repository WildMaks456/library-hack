import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { Formik, Form, useField } from "formik";
import axios from 'axios';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default function Login() {
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    email: yup.string().email('Неверный формат email').required('Обязательное поле'),
    password: yup.string().min(4, "Минимальное количество символов - 4").required('Обязательное поле'),
  });

  const initialValues = {
    email: '',
    password: ''
  };

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      console.log(values);
      const response = await axios.post('http://localhost:5000/auth/login', values);
      localStorage.setItem('token', response.data.token);
      navigate('/account');
    } catch (error) {
      console.error('Login error:', error);
      alert('Ошибка входа');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-wrapper">

      <div className="login-container">
        <div className="login-header">
          <h2>Вход</h2>
          <a className="close-btn" href='/account' >&times;</a>
        </div>
        <div className="register-link">
          Еще нет аккаунта? <a href="/register">Зарегистрироваться</a>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form>
              <MyTextInput
                name="email"
                type="email"
                placeholder="email"
              />
              <MyTextInput
                name="password"
                type="password"
                placeholder="пароль"
              />
              <div className="form-footer">
                <label>
                  <input type="checkbox" /> Запомнить меня
                </label>
                <a href="#">Забыли пароль?</a>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Вход...' : 'Войти'}
              </button>
            </Form>
          )}
        </Formik>
      </div>

    </div>
  );
}