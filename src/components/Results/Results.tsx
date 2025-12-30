import { useFilters } from '../../hooks/useFilters';
import styles from './Results.module.scss';

export function Results () { 

 const  filteredArticles  = useFilters()

  return(
    <div className={styles.resultsWrapper}>
      <p className={styles.resultsText}>Results:{filteredArticles?.length ?? 0}</p>
    </div>
  )
}