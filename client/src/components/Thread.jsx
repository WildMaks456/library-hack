import "../styles/Thread.css"
import imgLike from '../assets/Group.png'
import imgDisLike from '../assets/Dislike.png'
import imgStar from '../assets/star.png'
import imgComments from '../assets/Comments.png'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts } from './modalSlice';
import { NavLink } from 'react-router-dom';


export const Thread = () => {
		const dispatch = useDispatch();
		const posts = useSelector((state) => state.modal.posts);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/posts/get-posts');
								console.log(response.data);
								
                dispatch(setPosts(response.data));
            } catch (error) {
                console.error('Ошибка при получении постов', error);
            }
        };

        fetchPosts();
    }, [dispatch]);

    return (
        <div className="threads">
            {posts.map((post) => (
							<div key={post.id} className="thread">
                    <div className="thread-info">
												<div className="avatar"></div>
                        <div className="thread-author">{post.author_email}</div>
                        <div className="thread-date">{post.created_at}</div>
                    </div>
										<NavLink to={`/communities/post/${post.id}`}>
											<div className="thread-header">{post.title}</div>
										</NavLink>
                    <div className="thread-body">{post.content}</div>
										<div className="thread-footer">
										<div className="thread-likes">
												<img src={imgLike} alt=""/>
												<span>{post.likes}</span>
										</div>
										<div className="thread-dislikes">
												<img src={imgDisLike} alt=""/>
												<span>{post.dislikes}</span>
										</div>
										
										<div className="thread-star">
												<img src={imgStar} alt=""/>
										</div>

										<div className="thread-comments">
												<img src={imgComments} alt=""/>
										</div>

									</div>
               	  </div>
            ))}
        </div>
    );
};
