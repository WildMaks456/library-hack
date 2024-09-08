import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Profile } from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import { setIsValidToken } from './modalSlice';

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
                    <p>
                        У вас уже есть аккаунт? <NavLink to="/login">Аккаунт</NavLink> или хотите <NavLink to="/register">зарегаться</NavLink>?
                    </p>
                </>
            )}
        </div>
    );
}
