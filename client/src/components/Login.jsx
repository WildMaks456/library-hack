import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import {Form, Formik, useField} from "formik";

export default function Login() {
	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    email: yup.string().email('Неверный формат email').required('Обязательное поле'),
    password: yup.string().min(4, "Минимальное количество символов - 4").required('Обязательное поле'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

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

  const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
          <input className="text-input" {...field} {...props} />
          {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
          ) : null}
        </>
    );
  };



  return (
    <div>
      <h2>Вход</h2>
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
      >

        {formik => (
            <>
              <Form className='form-for-reg'>
                <div className="main-block-left2" id='for-mainblockleft2'>
                  <div className="form">
                    <label className="lbl-for-reg" htmlFor="inp2">Email</label>
                    <MyTextInput
                        name="email"
                        id="inp2"
                        type="email"
                    />
                    <label className="lbl-for-reg" htmlFor="inp4">Введите пароль</label>
                    <MyTextInput
                        name="password"
                        id="inp4"
                        type="password"
                    />
                  </div>
                </div>
              </Form>
            </>)}
      </Formik>
      <button type="submit">Войти</button>
    </div>
  );
}
