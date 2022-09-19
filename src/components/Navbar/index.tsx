import { Link, NavLink } from 'react-router-dom';
import styles from '../Navbar/index.module.scss';
const Navbar = () => {
  function changeBg(prop: boolean) {
    const activeStyle = {
      background: 'rgba(255, 255, 255, 0.514)',
      color: 'var(--main-color-w)',
    };
    const offActiveStyle = {
      background: 'var(--main-color-o)',
      color: 'var(--main-color-w)',
    };
    return prop ? activeStyle : offActiveStyle;
  }
  return (
    <div className={styles.navbar}>
      <NavLink className={styles.navbarLink} style={({ isActive }) => changeBg(isActive)} to="/">
        главная
      </NavLink>
      <NavLink
        className={styles.navbarLink}
        style={({ isActive }) => changeBg(isActive)}
        to="/main"
      >
        меню
      </NavLink>
      <NavLink
        className={styles.navbarLink}
        style={({ isActive }) => changeBg(isActive)}
        to="/statistics"
      >
        статистика
      </NavLink>
    </div>
  );
};

export default Navbar;
