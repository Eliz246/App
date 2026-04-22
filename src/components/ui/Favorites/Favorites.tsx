import React, {useState, useEffect} from 'react';
import cn from 'classnames';
import Card from '../Card/Card';
import projects, {type IProject} from '../../../data/projects';

export const Favorites: React.FC = () => {
    const [favoriteItems, setFavoriteItems] = useState<IProject[]>([]);

    const handleFavoriteChange = (id: string | number, isFav: boolean) => {
        if (!isFav) {
            setFavoriteItems(prev => prev.filter(item => item.id !== id));
        }
    };

    useEffect(() => {
      const saved = localStorage.getItem('favorites');
      // Явно типизируем массив ID как (string | number)[]
      const savedIds: (string | number)[] = saved ? JSON.parse(saved) : [];

      const filtered = projects.filter((project: IProject) => 
        savedIds.includes(project.id)
      );
      setFavoriteItems(filtered);
    }, []);

  return (
    <>
        {favoriteItems.length > 0 ? 
            (<div className={cn('card_wrapper')}>{favoriteItems.map((item: IProject) => (
                <Card key={item.id} {...item} onFavoriteChange={handleFavoriteChange} />
                ))}</div>
            ):(<h2 className={cn('h2')}>Здесь пока ничего нет :(</h2>)
        }
    </>
  );
};