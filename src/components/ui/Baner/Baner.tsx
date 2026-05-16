import React from 'react';
import s from "./Baner.module.css";

interface BannerProps {
  title: string;
  backgroundImage?: string;
  showButton?: boolean;
}

export const Baner: React.FC<BannerProps> = ({ title, backgroundImage, showButton = false }) => {
  const bannerStyle = backgroundImage 
    ? { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})` }
    : undefined;

  return (
    <div className={s.banner} style={bannerStyle}>
      <div className="container">
        <div className={s.content}>
          <h1 className={s.title} dangerouslySetInnerHTML={{ __html: title }} />
          {showButton && <button className={s.btn}>Консультация</button>}
        </div>
      </div>
    </div>
  );
};
