/* eslint-disable react/jsx-no-undef */
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../../pages/home';
import Main from '../../pages/main';
import Settings from '../../pages/settings';
import styles from '../AppRoutes/index.module.scss';
import ArtistQuiz from '../../pages/main/gameArtistQuiz/GameArtistQuiz';
const AppRoutes = () => {
  return (
    <div className={styles.appRouters}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/ArtistQuiz" element={<ArtistQuiz />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
