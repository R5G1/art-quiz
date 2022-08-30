import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import '../src/assets/style/style.scss';
import App from './App';
import store from './components/store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
