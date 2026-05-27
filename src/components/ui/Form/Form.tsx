import React, { useState, useEffect } from 'react';
import s from './Form.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(() => {
    const saved = localStorage.getItem('draft_form_data');
    return saved ? JSON.parse(saved) : { name: '', email: '', phone: '', message: '' };
  });

  useEffect(() => {
    localStorage.setItem('draft_form_data', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Данные успешно отправлены:', formData);
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    localStorage.removeItem('draft_form_data');
    alert('Форма отправлена!');
  };

  return (
    <div className={s.section}>
      <form className={s.form} onSubmit={handleSubmit}>
        <h2 className={s.title}>Свяжитесь с нами</h2>
        <input type="text" name="name" placeholder="Имя*" required className={s.input} value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email*" required className={s.input} value={formData.email} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Телефон*" required className={s.input} value={formData.phone} onChange={handleChange} />
        <textarea name="message" placeholder="Сообщение" className={`${s.input} ${s.textarea}`} value={formData.message} onChange={handleChange} />
        <button type="submit" className={s.submitBtn}>Отправить</button>
      </form>
    </div>
  );
};

export default Form;
