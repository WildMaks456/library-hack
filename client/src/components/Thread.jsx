import "../styles/Thread.css"

export const Thread = () => {
    return (
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
                    <img src="../assets/Group.png" alt=""/>
                    <span>12</span>
                </div>
                <div className="thread-dislikes">
                    <img src="../assets/Dislike.png" alt=""/>
                    <span>12</span>
                </div>
                
                <div className="thread-star">
                    <img src="../assets/star.png" alt=""/>
                </div>


            </div>
        </div>
    );
};