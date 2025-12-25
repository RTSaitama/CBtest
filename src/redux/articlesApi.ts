import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { type Article,  type ArticlesResponse, } from "../types/typedefs";




export const BASE_URL = 'https://api.spaceflightnewsapi.net/v4';

const articlesApi = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Article'],
  endpoints: (builder) => ({
    getArticles: builder.query<Article[], { limit?: number; offset?: number }>({
      query: ({ limit = 100, offset = 0 } = {}) => 
        `/articles/?limit=${limit}&offset=${offset}`,
      transformResponse: (response: ArticlesResponse) => response.results,
      providesTags: ['Article'],
      keepUnusedDataFor: 60,
    }),
    
    getArticleInfo: builder.query<Article, number>({
      query: (id) => `/articles/${id}/`,
      providesTags: (result, error, id) => [{ type: 'Article', id }],
    }),
    
    searchArticles: builder.query<Article[], string>({
      query: (searchTerm) => 
        `/articles/?search=${encodeURIComponent(searchTerm)}&limit=20`,
      transformResponse: (response: ArticlesResponse) => response.results,
    }),
  })
});

export const {
  useGetArticlesQuery,
  useGetArticleInfoQuery,
  useSearchArticlesQuery,
} = articlesApi;

export default articlesApi;