import React, {useState} from 'react';
import s from './Calculator.module.css';
import cn from 'classnames';

type ServType ='architect' | 'constr' | 'design' |'engineering';

const Calculator:React.FC = ()=>{
    const [area, setArea] = useState<number|string>('');
    const [activeServ, setActivServ] = useState<ServType[]>(['architect']);
    const prices: Record<ServType, number>={
        architect:100,
        constr:200,
        design:160,
        engineering:80,
    };

    const toggleService = (service: ServType) => {
        setActivServ(prev =>prev.includes(service)? prev.filter(s => s !== service): [...prev, service]);
    };
    const pricePerMeter = activeServ.reduce((sum, service) => sum + prices[service], 0);
    const totalPrice = Number(area) * pricePerMeter;

    return(
        <div className={cn(s.container, 'container')}>
            <div className={s.calc_back}>
                <div className={s.left_wrap}>
                    <h2 className={s.h2}>Вы вдохновляете —<br/> мы создаем</h2>
                    <div className={s.inputs}>
                        <div className={s.inputWrapper}>
                            <input type="number" placeholder="0" value={area} onChange={(e) => setArea(e.target.value)}/>
                            <span>m2</span>
                        </div>
                        <div className={s.inputWrapper}>
                            <input type="text" readOnly value={totalPrice || 0} />
                            <span>$</span>
                        </div>
                    </div>
                </div>
                <div className={s.right_wrap}>
                    <button className={`${s.serviceBtn} ${activeServ.includes('architect') ? s.active : ''}`}
                    onClick={() => toggleService('architect')}>
                        Архитектурное решение
                    </button>
        
                    <button className={`${s.serviceBtn} ${activeServ.includes('constr') ? s.active : ''}`}
                    onClick={() => toggleService('constr')}>
                        Строительный проект
                    </button>
        
                    <button className={`${s.serviceBtn} ${activeServ.includes('design') ? s.active : ''}`}
                    onClick={() => toggleService('design')}>
                        Дизайн-проект интерьера
                    </button>
        
                    <button className={`${s.serviceBtn} ${activeServ.includes('engineering') ? s.active : ''}`}
                    onClick={() => toggleService('engineering')}>
                        Инженерные сети
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Calculator;