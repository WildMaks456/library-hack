import "../styles/Thread.css"
import imgLike from '../assets/Group.png'
import imgDisLike from '../assets/Dislike.png'
import imgStar from '../assets/star.png'
import imgComments from '../assets/Comments.png'
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export const Thread = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/posts/get-posts');
								console.log(response.data);
								
                setPosts(response.data);
            } catch (error) {
                console.error('Ошибка при получении постов', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="threads">
					<div className="thread">
            <div className="thread-info">
                <div className="avatar"></div>
                <div className="thread-author">Максим</div>
                <div className="thread-date"> 21.07.2022 </div>
            </div>
            <div className="thread-header">Пушкин</div>
            <div className="thread-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at, consectetur debitis incidunt praesentium suscipit vero. Cum, delectus dolores eaque enim excepturi exercitationem facilis id impedit itaque minus odio officiis optio quisquam ratione, sapiente tempore veritatis, voluptatibus. Aliquid, animi dolorem ducimus in placeat rem repellat velit! Accusantium consequuntur laboriosam quasi!</div>

            <div className="thread-footer">
                <div className="thread-likes">
                    <img src={imgLike} alt=""/>
                    <span>12</span>
                </div>
                <div className="thread-dislikes">
                    <img src={imgDisLike} alt=""/>
                    <span>12</span>
                </div>
                
                <div className="thread-star">
                    <img src={imgStar} alt=""/>
                </div>

                <div className="thread-comments">
                    <img src={imgComments} alt=""/>
                </div>

            </div>
        </div>
            {posts.map((post) => (
							<div key={post.id} className="thread">
                    <div className="thread-info">
												<div className="avatar"></div>
                        <div className="thread-author">{post.author}</div>
                        <div className="thread-date">{post.date}</div>
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
            ))}
        </div>
    );
};
