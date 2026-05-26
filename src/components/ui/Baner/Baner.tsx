import { Link } from 'react-router-dom';
import s from "./Baner.module.css";

interface BannerProps {
  title: string;
  backgroundImage?: string;
  showButton?: boolean;
}

export const Baner = ({ title, backgroundImage, showButton = false }:BannerProps) => {
  const bannerStyle = backgroundImage 
    ? { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})` }
    : undefined;

  return (
    <div className={s.banner} style={bannerStyle}>
      <div className="container">
        <div className={s.content}>
          <h1 className={s.title} dangerouslySetInnerHTML={{ __html: title }} />
          <Link to={`/contacts`} className={s.card_link}>{showButton && <button className={s.btn}>Консультация</button>}</Link>
        </div>
      </div>
    </div>
  );
};
