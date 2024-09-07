import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import {Profile} from "./Profile";

export default function Account() {
    const [isValidToken, setIsValidToken] = useState(false);

    const tokenValid = () => {
        if(localStorage.getItem("token")) {
            setIsValidToken(true)
        } else {
            setIsValidToken(false)
        }
    }

    useEffect(() => {
        tokenValid()
    }, []);
	return (
    <div>


      <h2>Личный кабинет...</h2>
        
        {isValidToken ? <Profile/> : <>
           <p>У вас уже есть аккаунт? <NavLink to="/login">Аккаунт</NavLink> или хотите <NavLink to="/register">зарегаться</NavLink>?</p>
        </>
        }
    </div>
  );
}
