import { useGetArticlesQuery } from "../../redux/articlesApi"
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { LoadingPage } from "../../pages/LoadingPage/LoadingPage";
import styles from './ArticlesList.module.scss';
import { NavLink } from "react-router-dom";
import type { Article } from "../../types/typedefs";
import CalendarIcon from "../Buttons/CalendarBtn/CalendarIcon";
import { ReadMoreButton } from "../Buttons/ReadMoreBtn/ReadMoreBtn";
import { Search } from "../Search/Search";
import { Results } from "../Results/Results";
import { useFilters } from "../../hooks/useFilters";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { QueryMatchLighting } from "../../utils/QueryMatchLighting";

export function ArticlesList() {
  const filteredArticles = useFilters();
  const {  isLoading, isError } = useGetArticlesQuery({ limit: 100, offset: 0 });
  const searchQuery = useSelector((state: RootState) => state.filters.searchQuery);
  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage />;

  return (
    <div className="container">
      <Search />
      <Results/>
 
      <div className={styles.cardsList}>
        {filteredArticles?.map((article: Article) => {
          const preparedDescription = article.summary && `${article?.summary.slice(0,140)}...`
          const preparedTitle = article.title && `${article?.title.slice(0,20)}...`
          return (
            <NavLink key={article.id} to={`/v4/articles/${article.id}`}>
              <div className={styles.cardWrapper}>
                <div className={styles.cardImageWrapper}>
                  <img
                    src={article.image_url ?? '/NASAplaceholder.webp'}
                    alt={article.title}
                  />
                </div>
                <div className={styles.cardInfoWrapper}>
                  <div className={styles.cardDateWrapper}>
                    <CalendarIcon />
                    <p className={styles.cardDate}>{new Date(article.published_at).toLocaleDateString()}</p>
                  </div>
                  <p className={styles.cardTitle}>{QueryMatchLighting(preparedTitle, searchQuery)} </p>
                  <p className={styles.cardAbout}>{QueryMatchLighting(preparedDescription, searchQuery)}</p>
                  <ReadMoreButton />
                </div>
              </div>
            </NavLink>
          )
        })}
      </div>
    </div>
  );
}