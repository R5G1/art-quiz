/* eslint-disable react/jsx-no-undef */
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../../pages/home';
import Main from '../../pages/main/index';
import Settings from '../../pages/settings';
import styles from '../AppRoutes/index.module.scss';
import ArtistQuizQuestions from '../../pages/main/gameArtistQuizQuestions/gameArtistQuizQuestions';
import ArtistQuizPictures from '../../pages/main/gameArtistQuizPictures/gameArtistQuizPictures';
const AppRoutes = () => {
  return (
    <div className={styles.appRouters}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<ArtistQuizPictures />} />
        <Route path="/gameArtistQuizQuestions" element={<ArtistQuizQuestions />} />
        <Route path="/gameArtistQuizPictures" element={<ArtistQuizPictures />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
