import { Button } from '@mui/material';
import styles from './ReadMoreBtn.module.scss'
import { ArrowRightIcon } from '../../Icons/ArrowRightIcon';

export function ReadMoreButton() {
  return (
    <Button 
      className={styles.readMoreWrapper}
      color="inherit"
      sx={{ textTransform: 'none' }}
    >
      <p className={styles.readMoreText}>Read more</p>
    <ArrowRightIcon/>
    </Button>
  )
}