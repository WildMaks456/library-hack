import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Profile } from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import { setIsValidToken } from './modalSlice';
import Header from "./Header"

export default function Account() {
    const dispatch = useDispatch();
    const isValidToken = useSelector((state) => state.modal.isValidToken);

    useEffect(() => {
        const tokenValid = () => {
            if (localStorage.getItem('token')) {
                dispatch(setIsValidToken(true));
            } else {
                dispatch(setIsValidToken(false));
            }
        };
        tokenValid();
    }, [dispatch]);

    return (
        <div>
            {isValidToken ? (
                <Profile />
            ) : (
                <>
										<Header/>
										<div className="overall-statistics">
												<h4>У Вас уже есть <NavLink className={"overall-statistics2"} to="/login">aккаунт</NavLink>? или Вы хотите <NavLink className={"overall-statistics2"} to="/register">зарегистрироваться</NavLink>?</h4>
										</div>
                </>
            )}
        </div>
    );
}
