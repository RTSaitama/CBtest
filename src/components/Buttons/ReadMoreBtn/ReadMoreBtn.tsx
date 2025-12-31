import { Button } from '@mui/material';
import styles from './ReadMoreBtn.module.scss'
import { ArrowRightIcon } from '../../Icons/ArrowRightIcon';

export function ReadMoreButton() {
  return (
    <Button 
      className={styles.readMoreWrapper}
      color="inherit"
      sx={{ textTransform: 'none', marginTop:'20px', height:'24px', position:'absolute', bottom:'25px', left:'25px'  }}
    >
      <p className={styles.readMoreText}>Read more</p>
    <ArrowRightIcon/>
    </Button>
  )
}