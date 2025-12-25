import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetArticlesQuery } from '../redux/articlesApi';
import type { RootState } from '../redux/store';
import type { Article } from '../types/typedefs';

export function useFilters(): Article[] {
  const searchQuery = useSelector((state: RootState) => state.filters.searchQuery);

  const { data: articles = [] } = useGetArticlesQuery({ limit: 100, offset: 0 });

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) {
      return articles;
    }

    const query = searchQuery.toLowerCase();

    return articles
      .map(article => {
        const titleMatch = article.title.toLowerCase().includes(query);
        const summaryMatch = article.summary?.toLowerCase().includes(query);

        let priority = 0;
        if (titleMatch) {
          priority = 1;
        }
        else if (summaryMatch) {
          priority = 2;
        }

        return { article, priority };
      })
      .filter(item => item.priority > 0)
      .sort((a, b) => a.priority - b.priority)
      .map(item => item.article);
  }, [articles, searchQuery]);

  return filteredArticles;
}