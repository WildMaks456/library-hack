import React, { useCallback, useEffect, useState} from 'react'
import axios from 'axios';
import { useLocation, Link, Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setModels } from './modalSlice';

export default function Communities() {
	
	const location = useLocation();
	return (
		<>
			<div className=''>
          <ul className=''>
              <Link className='' to="/communities/main"><li className={`communities-nav-left-li ${location.pathname === '/communities/main' ? 'active' : ''}`}>Сообщество</li></Link>
              <Link className='' to="/communities/books-swap"><li className={`communities-nav-left-li ${location.pathname === '/communities/books-swap' ? 'active' : ''}`}>Обмен книгами</li></Link>
              <Link className='' to="/communities/favorities"><li className={`communities-nav-left-li ${location.pathname === '/communities/favorities' ? 'active' : ''}`}>Избранное</li></Link>
              <Link className='' to="/communities/my-posts"><li className={`communities-nav-left-li ${location.pathname === '/communities/my-posts' ? 'active' : ''}`}>Мои пуликации</li></Link>
          </ul>
      </div>
      <div className=''>
				{location.pathname === '/communities' && <Navigate to="/communities/main" replace />}
				<Outlet />
      </div>
		</>
	)
}
