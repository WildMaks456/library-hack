import "../styles/Profile.css"

export const Profile = () => {
    return (
        <div className="container">
            <div className="profile">
                <div className="profile-info">
                    <div className="profile-photo"></div>
                    <div className="profile-form">
                        <label htmlFor=""> Фио </label>
                        <input type="text" placeholder="Фио"/>
                        <label htmlFor=""> Почта </label>
                        <input type="text" placeholder="example@gmail.com"/>
                        <label htmlFor="">Номер телефона</label>
                        <input type="text" placeholder="+777777777"/>
                    </div>
                </div>

                <div className="overall-statistics">
                    <h4>Все книги </h4>
                    <div className="chart">
                        <div className="pie-chart"></div>
                        <div className="chart-info"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};