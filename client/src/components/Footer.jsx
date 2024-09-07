import React from 'react'
import logo from '../assets/logo.png'
import insta from '../assets/Instagram.png'
import telega from '../assets/Telegram.png'
import vk from '../assets/Vk.png'
import geo from '../assets/geo.png'
import watch from '../assets/watch.png'
import phone from '../assets/phone.png'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="logo-footer">
                    <div className="logo-soc">
                        <a href='/' className="logo">
                            <img src={logo} alt="" />
                            <h2>ОУНБ</h2>
                        </a>
                        <span>© 2024 design</span>
                    </div>
                    <div className="soc-footer">
                        <a href=""><img src={insta} alt="" /></a>
                        <a href=""><img src={telega} alt="" /></a>
                        <a href=""><img src={vk} alt="" /></a>
                    </div>
                </div>
                <div className="num_address">
                    <div className="num-footer">
                        <img src={phone} alt="" />
                        <span>+7 (721-2) 56-76-55.</span>
                    </div>
                    <div className="address-footer">
                        <img src={geo} alt="" />
                        <span>Казахстан, г.Караганда,<br />ул. С. Ерубаева, 44</span>
                    </div>
                </div>
                <div className="time-footer">
                    <img src={watch} alt="" />
                    <span>Пн-пт, вс<br />
                        09:00 - 18:00</span>
                </div>
                <div className="form-footer">
                    <div className="question">
                        <h4>Остались вопросы?</h4>
                        <span>Свяжитесь с нами!</span>
                    </div>
                    <div className="input-footer">
                        <input type="text" placeholder='...' />
                        <button>Отправить</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
