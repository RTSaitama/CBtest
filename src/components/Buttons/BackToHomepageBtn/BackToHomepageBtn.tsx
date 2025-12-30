import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../../redux/filterSlice';
import styles from './BackToHomepageBtn.module.scss';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { ArrowLeftIcon } from '../../Icons/ArrowLeftIcon';

export function BackToHomepageBtn() {
  const dispatch = useDispatch();
  return (
    <Button
      color="inherit"
      sx={{
        display: 'flex',
        gap: '6px',
        alignItems: 'center',
        textAlign: 'center',
        position: 'absolute',
        left: '150px',
        bottom: '45px',
        padding: 0,
        minWidth: 'auto',
        textTransform: 'none',
        '@media (max-width: 860px)': {
          left: '50%',
          transform: 'translateX(-50%)'
        },
        '&:hover': { backgroundColor: 'transparent' }
      }}
    >
     <ArrowLeftIcon/>

      <NavLink to={'/'} onClick={() => dispatch(setSearchQuery(''))}>
        <p className={styles.BackToHomeText}>Back to homepage</p>
      </NavLink>
    </Button>
  )
}