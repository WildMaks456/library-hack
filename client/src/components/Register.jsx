import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { Formik, Form, useField } from "formik";
import axios from 'axios';

const MyTextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className="form-group">
			<label className="lbl-for-reg" htmlFor={props.id}>{label}</label>
			<input className="text-input" {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</div>
	);
};

export default function Register() {
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

	const handleRegister = async (values, { setSubmitting }) => {
		try {
			console.log(values);
			await axios.post('http://localhost:5000/auth/registration', values);
			navigate('/account');
		} catch (error) {
			console.error('Registration error:', error);
			alert('Ошибка регистрации');
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div className="registration-wrapper">
			<div className="registration-container">
				<div className="registration-header">
					<h2>Регистрация</h2>
					<a className="close-btn" href='/account'>&times;</a>
				</div>
				<div className="login-link">
					Уже есть аккаунт? <a href="/login">Войти</a>
				</div>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleRegister}
				>
					{({ isSubmitting }) => (
						<Form className='form-for-reg'>
							<MyTextInput
								label="Ф.И.О"
								name="username"
								id="inp1"
								type="text"
							/>
							<MyTextInput
								label="Email"
								name="email"
								id="inp2"
								type="email"
							/>
							<MyTextInput
								label="Телефон"
								name="phone"
								id="inp3"
								type="text"
							/>
							<MyTextInput
								label="Введите пароль"
								name="password"
								id="inp4"
								type="password"
							/>
							<MyTextInput
								label="Повторите пароль"
								name="passwordTwo"
								id="inp5"
								type="password"
							/>
							<button type="submit" className="submit-btn" disabled={isSubmitting}>
								{isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
							</button>
						</Form>
					)}
				</Formik>

			</div>
		</div>
	);
}