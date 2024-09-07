import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, useField } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

export default function Register() {
	// const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  const navigate = useNavigate();

	const validationSchema = yup.object().shape({
		username: yup.string().required('Обязательное поле'),
		email: yup.string().email('Неверный формат email').required('Обязательное поле'),
		phone: yup.string().required('Обязательное поле'),
		password: yup.string().min(4, "Минимальное количество символов - 4").required('Обязательное поле'),
		passwordTwo: yup.string().oneOf([yup.ref('password'), null], 'Пароли должны совпадать').min(4, "Минимальное количество символов - 4").required('Обязательное поле'),
	});
	
	const initialValues = {
		username: '',
		email: '',
		phone: '',
		password: '',
		passwordTwo: '',
	};

  const handleRegister = (values, { setSubmitting}) => {
    try {
			console.log(values);
      axios.post('http://localhost:5000/auth/registration', values)
      .then(response => {
				console.log('POST запрос выполнен успешно', response.data);
			})
			.catch(error => {
				console.error('Ошибка при выполнении POST запроса', error);
			});
      navigate('/account');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Ошибка регистрации');
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
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={handleRegister}
						>
							
							{formik => (
								<>
								<Form className='form-for-reg'>
									<div className="main-block-left2" id='for-mainblockleft2'>
										<div className="form">
											<h2 className="main-block-left2-reg">Регистрация</h2>
											<label className="lbl-for-reg" htmlFor="inp1">Ф.И.О</label>
											<MyTextInput
												name="username"
												id="inp1"
												type="text"
											/>
											<label className="lbl-for-reg" htmlFor="inp2">Email</label>
											<MyTextInput
												name="email"
												id="inp2"
												type="email"
											/>
											<label className="lbl-for-reg" htmlFor="inp3">Телефон</label>
											<MyTextInput
												name="phone"
												id="inp3"
												type="text"
											/>
											<label className="lbl-for-reg" htmlFor="inp4">Введите пароль</label>
											<MyTextInput
												name="password"
												id="inp4"
												type="password"
											/>
											<label className="lbl-for-reg" htmlFor="inp5">Повторите пароль</label>
											<MyTextInput
												name="passwordTwo"
												id="inp5"
												type="password"
											/>
										</div>
									<button type='submit' className='btn-with-img' id='extForRegistr'>Зарегистрироваться</button>
								</div>
							</Form>
						</>)}
						</Formik>
      {/* <h2>Регистрация</h2>
      <input type="text" placeholder="Имя пользователя" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <input type="email" placeholder="Почта" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="text" placeholder="Телефон" value={phone} onChange={(e) => setPhone(e.target.value)}/>
      <button onClick={handleRegister}>Зарегаться</button> */}
    </div>
  );
}

