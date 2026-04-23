import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import s from './Footer.module.css';
import inst from '../../../images/inst.svg';
import tele from '../../../images/telega.svg';
import vk from '../../../images/vk.svg';

const Footer:React.FC = () =>{
    return(
        <div className={s.footer}>
            <div className={cn(s.container, 'container')}>
                <div className={s.wrapper}>
                    <div>
                        <Link to='/' className={cn(s.logo, 'logo', s.footer_logo)}>Interi</Link>
                        <div className={s.links}>
                            <a className={s.link} href=""><img src={vk} alt="vk"/></a>
                            <a className={s.link} href=""><img src={tele} alt="tele"/></a>
                            <a className={s.link} href=""><img src={inst} alt="inst"/></a>
                        </div>
                    </div>
                    <div className={s.left_wrap}>
                        <div className={s.menu_wrap}>
                            <ul className={s.menu}>
                                <li className={s.menu_item}>Проекты</li>
                                <li className={s.menu_item}>Блог</li>
                            </ul>
                            <ul className={s.menu}>
                                <li className={s.menu_item}>О нас</li>
                                <li className={s.menu_item}>Контакты</li>
                            </ul>
                            <ul className={s.menu}>
                                <li className={s.menu_item}>+375 (29) 999-99-99</li>
                                <li className={s.menu_item}>Interi@gmail.com</li>
                                <li className={s.menu_item}>ул. М. Богдановича, д. 11, 2−3 этаж</li>
                            </ul>
                        </div>
                        <p className={s.text}>Режим работы кол-центра ежедневно с 09:00 до 21:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;