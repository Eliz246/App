import cn from 'classnames';
import { teamData } from '../../../data/team';
import s from './AboutCompany.module.css';

import infoImg1 from '../../../images/team.jpg';
import infoImg2 from '../../../images/plan.jpg';
import infoImg3 from '../../../images/build.jpg';

export const AboutCompany = () => {
  return (
    <div className={s.page}>
      <div className="container">

        <section className={s.info_section}>
          <div className={s.info_block}>
            <div className={s.text_content}>
              <p>
                Interi — это сообщество архитекторов, инженеров и урбанистов, 
                объединенных желанием менять городской ландшафт к лучшему. 
                С 2014 мы специализируемся на проектировании жилых комплексов, 
                общественных пространств и объектов коммерческой недвижимости.
              </p>
            </div>
            <div className={s.image_wrapper}>
              <img src={infoImg1} alt="Команда Interi" />
            </div>
          </div>
          <div className={cn(s.info_block, s.reverse)}>
            <div className={s.text_content}>
              <p>
                Наша философия базируется на трех китах: функциональность, эстетика и 
                экономическая целесообразность. Мы не работаем «ради искусства», мы создаем 
                архитектуру, которая решает бизнес-задачи клиента, повышает 
                капитализацию объектов и при этом остается комфортной для человека.
              </p>
            </div>
            <div className={s.image_wrapper}>
              <img src={infoImg2} alt="Чертежи и проектирование" />
            </div>
          </div>
          <div className={s.info_block}>
            <div className={s.text_content}>
              <p>
                Архитектура — это слишком дорогое удовольствие, чтобы позволить себе 
                ошибаться. Мы берем на себя ответственность за каждый миллиметр проекта, 
                чтобы конечный результат превосходил ожидания.
              </p>
            </div>
            <div className={s.image_wrapper}>
              <img src={infoImg3} alt="Строительный объект" />
            </div>
          </div>
        </section>
        <section className={s.team_section}>
          <h2 className={s.team_title}>Наша команда</h2>
          
          <div className={s.team_grid}>
            {teamData.map((member) => (
              <div key={member.id} className={s.member_card}>
                <div className={s.member_photo_wrap}>
                  <img src={member.image} alt={member.name} className={s.member_photo} />
                </div>
                <h4 className={s.member_name}>{member.name}</h4>
                <p className={s.member_position}>{member.position}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
