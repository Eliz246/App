import cn from 'classnames';
import { Link } from 'react-router-dom';
import s from './Header.module.css';
import sunicon from '../../../images/sun.svg';
import moonicon from '../../../images/moon.svg';
import heart from '../../../images/heart.svg';
import { useTheme } from '../Theme/Theme';
const Header =()=>{
    const { theme, toggleTheme } = useTheme();
    return(
        <div className={s.header}>
            <div className={cn(s.container, 'container')}>
                <div className={s.wrapper}>
                    <Link to='/' className={cn(s.logo, 'logo',s.link)}>Interi</Link>
                    <ul className={s.menu}>
                        <li className={s.item}><Link to="/catalog" className={s.link}>Проекты</Link></li>
                        <li className={s.item}>Блог</li>
                        <li className={s.item}>О нас</li>
                        <li className={s.item}><Link to="/contacts" className={s.link}>Контакты</Link></li>
                    </ul>
                    <div className={s.wrapper}>
                        <p className={s.item}>+375 (29) 999-99-99</p>
                        <button onClick={toggleTheme} className={s.btnicon}><img src={theme==='light'?sunicon:moonicon} className={cn(s.icon, s.item)}></img></button>
                        <Link to="/favorites" className={s.link}><img src={heart} className={cn(s.icon, s.item)}></img></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;