import { useState, useMemo } from 'react';
import projects from '../../../data/projects';
import  Card  from '../Card/Card';
import cn from 'classnames';
import s from './Catalog.module.css';

type SortField = 'area' | 'floors' | 'rooms';
type SortDir = 'asc' | 'desc';

const Catalog = () => {
  // --- Состояния ---
  const [visibleCount, setVisibleCount] = useState(9);
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>('desc');

  // Состояния фильтров
  const [selectedFloors, setSelectedFloors] = useState<number[]>([]);
  const [areaRange, setAreaRange] = useState({ from: '', to: '' });
  const [roomsRange, setRoomsRange] = useState({ from: '', to: '' });
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  // --- Логика фильтрации и сортировки ---
  const filteredAndSorted = useMemo(() => {
    // 1. Фильтруем
    let result = projects.filter(p => {
      const matchFloors = selectedFloors.length === 0 || selectedFloors.includes(p.floors);
      
      const roomsFrom = Number(roomsRange.from) || 0;
      const roomsTo = Number(roomsRange.to) || Infinity;
      const matchRooms = p.rooms >= roomsFrom && p.rooms <= roomsTo;

      const from = Number(areaRange.from) || 0;
      const to = Number(areaRange.to) || Infinity;
      const matchArea = p.area >= from && p.area <= to;

      // Фильтр по доп. помещениям (должны быть ВСЕ выбранные)
      const matchFeatures = selectedFeatures.every(f => p.features.includes(f));

      return matchFloors && matchArea && matchRooms && matchFeatures;
    });

    // 2. Сортируем
    if (sortField) {
      result.sort((a, b) => {
        const valA = a[sortField];
        const valB = b[sortField];
        return sortDir === 'desc' ? valB - valA : valA - valB;
      });
    }

    return result;
  }, [selectedFloors, areaRange, roomsRange, selectedFeatures, sortField, sortDir]);

  // --- Обработчики ---
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir(prev => prev === 'desc' ? 'asc' : 'desc');
    } else {
      setSortField(field);
      setSortDir('desc');
    }
  };

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  return (
    <div className={s.catalog_layout}>
      {/* Боковая панель (Sticky) */}
      <aside className={s.sidebar}>
        <div className={s.filter_block}>
          <h3>Этажность</h3>
          {[1, 2, 3].map(num => (
            <label key={num} className={s.checkbox_label}>
              <input 
                type="checkbox" 
                checked={selectedFloors.includes(num)}
                onChange={() => setSelectedFloors(prev => 
                  prev.includes(num) ? prev.filter(n => n !== num) : [...prev, num]
                )}
              />
              {num} {num === 1 ? 'этаж' : 'этажа'}
            </label>
          ))}

          <h3>Площадь, м2</h3>
          <div className={s.input_row}>
            <input placeholder="от" value={areaRange.from} onChange={e => setAreaRange({...areaRange, from: e.target.value})} />
            <input placeholder="до" value={areaRange.to} onChange={e => setAreaRange({...areaRange, to: e.target.value})} />
          </div>

          <h3>Количество комнат</h3>
            <div className={s.input_row}>
            <input 
                type="number"
                placeholder="от" 
                value={roomsRange.from} 
                onChange={e => setRoomsRange({...roomsRange, from: e.target.value})} 
            />
            <input 
                type="number"
                placeholder="до" 
                value={roomsRange.to} 
                onChange={e => setRoomsRange({...roomsRange, to: e.target.value})} 
            />
            </div>

          <h3>Доп. помещения</h3>
          {['гараж', 'кабинет', 'кладовая', 'сауна', 'бассейн'].map(f => (
            <label key={f} className={s.checkbox_label}>
              <input 
                type="checkbox" 
                checked={selectedFeatures.includes(f)}
                onChange={() => toggleFeature(f)}
              />
              {f}
            </label>
          ))}
        </div>
      </aside>

      {/* Основная часть */}
      <main className={s.content}>
        <div className={s.sort_bar}>
          {(['area', 'floors', 'rooms'] as SortField[]).map(field => (
            <button 
              key={field}
              className={cn(s.sort_btn, sortField === field && s.active)}
              onClick={() => handleSort(field)}
            >
              {field === 'area' ? 'По площади' : field === 'floors' ? 'По этажности' : 'По комнатам'}
              <span className={cn(s.arrow, sortField === field && sortDir === 'asc' && s.rotate)}>∨</span>
            </button>
          ))}
        </div>

        <div className={s.grid}>
          {filteredAndSorted.slice(0, visibleCount).map(p => (
            <Card key={p.id} {...p} />
          ))}
        </div>

        {visibleCount < filteredAndSorted.length && (
          <button className={s.more_btn} onClick={() => setVisibleCount(prev => prev + 9)}>
            Еще
          </button>
        )}
      </main>
    </div>
  );
};

export default Catalog;