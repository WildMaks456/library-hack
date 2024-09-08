import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import imgLike from '../assets/Group.png';
import imgDisLike from '../assets/Dislike.png';
import imgStar from '../assets/star.png';
import imgComments from '../assets/Comments.png';
import "../styles/postDetail.css"

export default function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/posts/get-post/${id}`);
                setPost(response.data);
            } catch (error) {
                console.error('Ошибка при получении поста:', error);
            }
        };
        fetchPost();
    }, [id]);

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
        </div>
			</div>
        
    );
}
