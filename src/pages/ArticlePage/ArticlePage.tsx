import { useParams } from "react-router-dom";
import { useGetArticleInfoQuery } from "../../redux/articlesApi";
import { LoadingPage } from "../LoadingPage/LoadingPage";
import { ErrorPage } from "../ErrorPage/ErrorPage";

import styles from "./ArticlePage.module.scss"
import { BackToHomepageBtn } from "../../components/Buttons/BackToHomepageBtn/BackToHomepageBtn";

export function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetArticleInfoQuery(Number(id) || 0);

  if (!id) return <ErrorPage />;
  if (isLoading) return <LoadingPage />;
  if (isError || !data) return <ErrorPage />;

  const article = data;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImageWrapper}>
        <img
          src={article.image_url ?? '/CBtest/NASAplaceholder.webp'}
          alt={article.title}
          onError={(e) => {
            e.currentTarget.src = '/CBtest/NASAplaceholder.webp';
          }}
        />

      </div>
      <div className={styles.cardInfoWrapper}>
        <p className={styles.cardTitle}>{article.title}</p>
        {article.summary && (
          <p className={styles.cardAbout}>{article.summary}</p>
        )}
      </div>
      <BackToHomepageBtn />
    </div>
  );
}