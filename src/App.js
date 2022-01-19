import styles from './App.module.css';

import CvHeader from './components/layout/CvHeader';
import CvLeft from './components/layout/CvLeft';
import CvRight from './components/layout/CvRight';

function App() {
  return (
    <div className={styles.background}>

      <div className={styles.global_container}>

        <CvHeader />

        <div className={styles.local_container}>

          <CvLeft />

          <CvRight />

        </div>
        
      </div>

    </div>
  );
}

export default App;
