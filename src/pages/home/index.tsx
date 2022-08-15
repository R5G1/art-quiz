import { useEffect } from 'react';
import styles from '../home/Index.module.scss';
import logo from '/images/1.svg';
function Home() {
  return (
    <div className="conteiner">
      <div className={styles.home}>
        <img src="/images/1.svg" alt="" />
      </div>
    </div>
  );
}

export default Home;
