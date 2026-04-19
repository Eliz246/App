import React from "react";
import cn from 'classnames';
import s from './Header.module.css';
import sunicon from '../../../images/sun-svgrepo-com.svg';
import heart from '../../../images/heart-svgrepo-com.svg';
const Header: React.FC =()=>{
    return(
        <div className={s.header}>
            <div className={cn(s.container, 'container')}>
                <div>Interi</div>
                <ul>
                    <li>Проекты</li>
                    <li>Блог</li>
                    <li>О нас</li>
                    <li>Контакты</li>
                </ul>
                <div>
                    <p>+375 (29) 999-99-99</p>
                    <img src={sunicon} className=""></img>
                    <img src={heart} className=""></img>
                </div>
            </div>
        </div>
    )
}
export default Header;