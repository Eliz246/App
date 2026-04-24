import s from './Contacts.module.css';

const Contacts = ()=>{
    return (
        <div className={s.mapContainer}>
            <div className={s.mapWrapper}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2128.8435972469747!2d27.497772776281305!3d53.87044963538033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd0728b3dd6c5%3A0x4a7084be58203a00!2z0JbQtdC70LXQt9C90L7QtNC-0YDQvtC20L3QsNGPINGD0LvQuNGG0LAgMzcsINCc0LjQvdGB0LosINCc0LjQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMIDIyMDA4OQ!5e1!3m2!1sru!2sby!4v1777067863667!5m2!1sru!2sby"
                width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={s.info}>
            <div className={s.info_item}>
              <h3 className={s.label}>Адрес:</h3>
              <p className={s.text}>Минск, Беларусь</p>
              <p className={s.text}>ул. Железнодорожная, д. 37</p>
            </div>

            <div className={s.info_item}>
              <h3 className={s.label}>Время работы:</h3>
              <p className={s.text}>с 10:00 до 19:00</p>
              <p className={s.text}>Выходные: суббота, воскресенье</p>
            </div>

            <div className={s.info_item}>
              <h3 className={s.label}>Контакты:</h3>
              <p className={s.text}>+375 (29) 999 99 99 Светлана</p>
              <a href="mailto:Interi@gmail.com" className={s.email}>
                Interi@gmail.com
              </a>
            </div>
          </div>
        </div>
  );
};
export default Contacts;