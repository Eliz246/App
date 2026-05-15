import { useState } from 'react';
import { Articles } from '../../../data/articles';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import s from './Article.module.css';

export const ArticleGrid = () => {

  const [visibleCount, setVisibleCount] = useState<number>(12);

  const handleLoadMore = (): void => {
    setVisibleCount((prev) => prev + 6); 
  };

  const visibleArticles = Articles.slice(0, visibleCount);

  return (
    <div className={s.gridContainer}>
      <div className={s.articlesGrid}>
        {visibleArticles.map((article) => (
          <div key={article.id} className={`${s.gridItem} ${s.fadeIn}`}>
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
      {visibleCount < Articles.length && (
        <div className={s.buttonWrapper}>
          <button onClick={handleLoadMore} className={s.loadMoreBtn}>
            Еще
          </button>
        </div>
      )}
    </div>
  );
};
