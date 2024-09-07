import React, { useCallback, useEffect, useState} from 'react'
import axios from 'axios';
import { useLocation, Link, Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setModels } from './modalSlice';
import Header from './Header';
import "../styles/Communities.css"

export default function Communities() {
	
	const location = useLocation();
	return (
		<>
			<Header />
			<div className="wrapper">
				<div className="wrap-cont">
					<div className='communities-nav-left-div'>
						<ul className='communities-nav-left-ul'>
								<Link className='communities-nav-left-link' to="/communities/main"><li className={`communities-nav-left-li ${location.pathname === '/communities/main' ? 'active' : ''}`}>Сообщество</li></Link>
								<Link className='communities-nav-left-link' to="/communities/books-swap"><li className={`communities-nav-left-li ${location.pathname === '/communities/books-swap' ? 'active' : ''}`}>Обмен книгами</li></Link>
								<Link className='communities-nav-left-link' to="/communities/favorities"><li className={`communities-nav-left-li ${location.pathname === '/communities/favorities' ? 'active' : ''}`}>Избранное</li></Link>
								<Link className='communities-nav-left-link' to="/communities/my-posts"><li className={`communities-nav-left-li ${location.pathname === '/communities/my-posts' ? 'active' : ''}`}>Мои пуликации</li></Link>
						</ul>
					</div>
					<div className='communities-nav-right-div'>
						{location.pathname === '/communities' && <Navigate to="/communities/main" replace />}
						<Outlet />
					</div>
				</div>
			</div>
			
		</>
	)
}
