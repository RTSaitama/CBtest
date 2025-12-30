import { setSearchQuery } from '../../redux/filterSlice';
import styles from './search.module.scss';
import { useDispatch } from 'react-redux';
import { useRef, type ChangeEvent } from 'react';
import { SearchIcon } from './SearchIcon';

export function Search() {
  const dispatch = useDispatch();
  const timeoutRef = useRef<number | null>(null);  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      dispatch(setSearchQuery(event.target.value));
    }, 300);  
  };
  return (
    <div className={styles.searchWrapper}>
      <label htmlFor="search" className={styles.searchLabel}>
        Filter by keywords
      </label>
      <div 
      className={styles.searchInputWrapper} 
      > 
       <SearchIcon />

        <input
          onChange={handleChange}
          type="text"
          id="search"
          placeholder='Search best anime characters here '
          className={styles.searchInput} />
      </div>

    </div>
  )
}