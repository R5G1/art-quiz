import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <footer>
          <div className="footer__content">
            <div className="footer__logo-naim">
              <a
                className="footer__logo-naim-link"
                target="_blank"
                href="https://github.com/R5G1"
                rel="noreferrer"
              >
                App developer: R5G1
              </a>
            </div>
            <div className="footer__logo-data">
              <p>2022</p>
            </div>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
