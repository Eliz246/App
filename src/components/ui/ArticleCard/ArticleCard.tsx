import {Link} from 'react-router-dom';
import { type ArticleProp } from "../../../data/articles";
import s from './ArticleCard.module.css';
interface ArticleCardProp{
    article: ArticleProp;
}

export const ArticleCard = ({article}: ArticleCardProp)=>{
    return(
        <Link to={article.path} className={s.art_card_link}>
            <div className={s.art_card}>
                <div className={s.img_wrap}>
                    <img src={article.img}/>
                    <span className={s.topic}>{article.topic}</span>
                </div>
                <div className={s.content}>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                </div> 
            </div>
        </Link>
    )
}