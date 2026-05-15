import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import projects from '../../../data/projects'; // Импорт вашего массива данных
import type { IProject } from '../../../data/projects';
import s from './ProjectPage.module.css';

export const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const currentProject = projects.find(p => String(p.id) === id);

  if (!currentProject) {
    return <div className="container"><h2>Проект не найден</h2></div>;
  }

  const declOfNum = (number: number, titles: [string, string, string]): string => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[Math.min(number % 10, 5)]];
  };

  return (
    <div className={s.project_page}>
      <div className="container">
        
        <div className={s.top_grid}>
          <div className={s.architecture_block}>
            <h2 className={s.section_title}>Архитектура</h2>
            <p className={s.descr_text}>Проект реконструкции отеля на острове Бали включал в себя несколько этапов: создание концепции, разработка типологии номеров и общественных пространств, формирование внешней композиции и проработка деталей экстерьера. В результате было достроено два этажа, увеличено количество номеров до 42, в комплексе размещены ресторан, кафе, бассейн, коворкинг, комната для подкастов, две зеленые кровли с зонами отдыха, и площадка BBQ. В отделке фасадов преобладает декоративная штукатурка в сочетании с латунными панелями и рейками, а так же активно применяется вертикальное озеленение.</p>
          </div>
          <div className={s.info_block}>
            <h2 className={s.section_title}>О проекте</h2>
            <ul className={s.info_list}>
              <li className={s.info_item}>
                <span className={s.info_label}>Площадь</span>
                <span className={s.info_value}>{currentProject.area} м²</span>
              </li>
              <li className={s.info_item}>
                <span className={s.info_label}>Количество комнат</span>
                <span className={s.info_value}>
                  {currentProject.rooms} {declOfNum(currentProject.rooms, ['комната', 'комнаты', 'комнат'])}
                </span>
              </li>
              <li className={s.info_item}>
                <span className={s.info_label}>Этажность</span>
                <span className={s.info_value}>
                  {currentProject.floors} {declOfNum(currentProject.floors, ['этаж', 'этажа', 'этажей'])}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={s.layout_section}>
          <h2 className={s.section_title}>Планировка</h2>
          
          <div className={s.layout_grid}>
            <div className={s.rooms_table}>
              {currentProject.roomsList.map((room, index) => (
                <div key={index} className={s.table_row}>
                  <span className={s.room_name}>{room.name}</span>
                  <span className={s.room_area}>{room.area} м²</span>
                </div>
              ))}
            </div>
            <div className={s.blueprint_wrapper}>
              <img src={currentProject.layoutImage} alt="Чертеж планировки" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
