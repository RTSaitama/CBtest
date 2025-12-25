// hooks/useFilters.ts
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetArticlesQuery } from '../redux/articlesApi';
import type { RootState } from '../redux/store';
import type { Article } from '../types/typedefs';

export function useFilters(): Article[] {
  const searchQuery = useSelector((state: RootState) => state.filters.searchQuery);

  const { data: articles = [] } = useGetArticlesQuery({ limit: 100, offset: 0 });

  const filteredArticles = useMemo(() => {

    if (!searchQuery.trim()){
      return articles;
    }

    return articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [articles, searchQuery]);

  return filteredArticles;
}