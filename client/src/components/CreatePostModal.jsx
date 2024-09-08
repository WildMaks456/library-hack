import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setPosts } from './modalSlice';
import "../styles/Modal.css"

export default function CreatePostModal({ onClose }) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
		const dispatch = useDispatch();


    const handleCreatePost = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post('http://localhost:5000/posts/add', {
                title,
                text,
                date: new Date(),
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
						console.log(response.data);
						
            try {
								const response = await axios.get('http://localhost:5000/posts/get-posts');
								console.log(response.data);
								
								dispatch(setPosts(response.data));
						} catch (error) {
								console.error('Ошибка при получении постов', error);
						}
            onClose();
        } catch (error) {
            console.error('Ошибка при добавлении поста', error);
        }
    };

    return (
        <div className="modal">
					<div className="modal-content">
						<h2>Создать новый пост</h2>
            <input
                type="text"
                placeholder="Заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Текст поста"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className='communities-nav-right-div-btn' onClick={handleCreatePost}>Добавить пост</button>
            <button className='communities-nav-right-div-btn' onClick={onClose}>Закрыть</button>
					</div>
        </div>
    );
}