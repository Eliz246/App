import React, {useState} from "react";
import cn from 'classnames';
import s from './Card.module.css';
import heartS from '../../../images/heart_stroke_b.svg';
import heartF from '../../../images/heart_fill_b.svg';

interface CardProps{
    id: string | number;
    image:string;
    title:string;
    area:number;
    floors:number;
    rooms: number;
    onFavoriteChange?: (id: string | number, isFav: boolean) => void;
};

const Card =({id, onFavoriteChange, image, title, area, floors, rooms}:CardProps)=>{
    const [isFavorite, setIsFavorite] = useState(() => {
        const saved = localStorage.getItem('favorites');
        const favorites = saved ? JSON.parse(saved) : [];
        return favorites.includes(id);
    });
    const toggleFavorite = (e: React.MouseEvent) => {
        e.stopPropagation();
        // 2. Получаем текущий список из памяти
        const saved = localStorage.getItem('favorites');
        let favorites = saved ? JSON.parse(saved) : [];

        if (!isFavorite) {
        // Добавляем ID, если его там нет
        favorites.push(id);
        } else {
        // Удаляем ID, если он там был
        favorites = favorites.filter((favId: string | number) => favId !== id);
        }
        // 3. Сохраняем обновленный список обратно
        localStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorite(!isFavorite);

        const newFavoriteStatus = !isFavorite;
        setIsFavorite(newFavoriteStatus);

        // ВЫЗЫВАЕМ ФУНКЦИЮ ОБРАТНОЙ СВЯЗИ
        if (onFavoriteChange) {
            onFavoriteChange(id, newFavoriteStatus);
        }
        
    };
    const declOfNum = (number: number, titles: [string, string, string]) => {
        const cases = [2, 0, 1, 1, 1, 2];
        return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[Math.min(number % 10, 5)]];
    };
    return(
        <div className={s.card}>
            <div className={s.img_wrapper}>
                <img className={s.img} src={image} alt={title}/>
                <button className={s.favoriteBtn} onClick={toggleFavorite}>
                    <img src={isFavorite ? heartF : heartS} alt="favorite" className={s.heartIcon}/>
                </button>
            </div>
            <div className={s.content}>
                <h4 className={cn(s.h4, 'h4')}>{title}</h4>
                <div className={s.info}>
                    <p className={s.item}>{area}m2</p>
                    <p className={s.item}>{floors}{declOfNum(floors,[' этаж',' этажа',' этажей'])}</p>
                    <p className={s.item}>{rooms}{declOfNum(rooms,[' комната',' комнаты',' комнат'])}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;