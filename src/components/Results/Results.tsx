import { useGetArticlesQuery } from '../../redux/articlesApi';
import styles from './Results.module.scss';

export function Results () { 
 const { data } = useGetArticlesQuery({ limit: 20, offset: 0 });

  return(
    <div className={styles.resultsWrapper}>
      <p className={styles.resultsText}>Results:{data?.length ?? 0}</p>
    </div>
  )
}