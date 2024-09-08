import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import imgLike from '../assets/Group.png';
import imgDisLike from '../assets/Dislike.png';
import imgStar from '../assets/star.png';
import imgComments from '../assets/Comments.png';
import "../styles/postDetail.css";

export default function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/posts/get-post/${id}`);
                // Преобразуем поле comments в массив, если это строка
                const postData = {
                    ...response.data,
                    comments: Array.isArray(response.data.comments) ? response.data.comments : JSON.parse(response.data.comments || '[]')
                };
                setPost(postData);
            } catch (error) {
                console.error('Ошибка при получении поста:', error);
            }
        };

        fetchPost();
    }, [id]);

    const handleAddComment = async () => {
			if (!newComment.trim()) return;
	
			try {
					const token = localStorage.getItem('token');
	
					const response = await axios.post(`http://localhost:5000/posts/save-comment`, {
							postId: id,
							comment: newComment,
					}, {
							headers: {
									'Authorization': `Bearer ${token}`,
							}
					});
	
					setPost((prevPost) => ({
							...prevPost,
							comments: [...prevPost.comments, response.data],
					}));
					setNewComment('');
			} catch (error) {
					console.error('Ошибка при добавлении комментария:', error);
			}
	};

    if (!post) {
        return <div>Загрузка поста...</div>;
    }

    return (
        <div className="post-detail-dop">
            <div className="thread">
                <div className="thread-info">
                    <div className="avatar"></div>
                    <div className="thread-author">{post.author_email}</div>
                    <div className="thread-date">{post.created_at}</div>
                </div>
                <div className="thread-header">{post.title}</div>
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

                {/* Секция комментариев */}
                <div className="comments-section">
                    <h3>Комментарии</h3>
                    
                    <div className="add-comment">
                        <input 
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Добавить комментарий"
                        />
                        <button onClick={handleAddComment}>Отправить</button>
                    </div>
                    
                    <ul>
                        {post.comments.map((comment, index) => (
                            <li key={index}>
                                <strong>{comment.author_id}</strong>: {comment.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
