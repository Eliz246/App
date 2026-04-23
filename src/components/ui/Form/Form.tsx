import React, {useState} from 'react';
import cn from 'classnames';
import s from './Form.module.css';

interface FormProp{
    name: string;
    email: string;
    phone: string;
    message: string;
}

export const Form: React.FC = ()=>{
    const [form, setForm] = useState<FormProp>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // 1. Обязательно отменяем перезагрузку страницы
    e.preventDefault();
    // 2. Здесь ты можешь отправить данные, например, через fetch или axios
    console.log('Данные формы готовы к отправке:', form);
    // 3. Очистим форму после успешной "отправки"
    setForm({ name: '', email: '', phone: '', message: '' });
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    };

    return(
        <div className={cn(s.container, 'container')}>
            <div className={s.section}>
                <form className={s.form} onSubmit={handleSubmit}>
                    <h2 className={s.title}>Свяжитесь с нами</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Имя*"
                        required
                        className={s.input}
                        value={form.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        required
                        className={s.input}
                        value={form.email}
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Телефон*"
                        required
                        className={s.input}
                        value={form.phone}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="Сообщение"
                        className={`${s.input} ${s.textarea}`}
                        value={form.message}
                        onChange={handleChange}
                    />
                    <button type="submit" className={s.submitBtn}>
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Form;