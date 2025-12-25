import { AstronautDog } from '../../components/Spinner/AstranautDog';
import styles from './LoadingPage.module.scss';

export function LoadingPage() {
  return (
    <div className={styles.loadingPage}>
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}>
          <AstronautDog className={styles.spinnerSvg} />
        </div>
        <h2>Loading articles...</h2>
        <p>Astronaut dog is fetching space news! </p>
      </div>
    </div>
  );
}