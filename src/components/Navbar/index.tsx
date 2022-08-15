import { Link, NavLink } from 'react-router-dom';
import styles from '../Navbar/index.module.scss';
const Navbar = () => {
  function changeBg(prop: boolean) {
    const activeStyle = {
      background: 'rgba(255, 255, 255, 0.514)',
      color: 'rgb(0, 0, 0)',
    };
    const offActiveStyle = {
      background: 'rgba(214, 203, 203, 0)',
      color: 'rgb(252, 252, 252)',
    };
    return prop ? activeStyle : offActiveStyle;
  }
  return (
    <div className={styles.navbar}>
      <NavLink className={styles.navbarLink} style={({ isActive }) => changeBg(isActive)} to="/">
        home
      </NavLink>
      <NavLink
        className={styles.navbarLink}
        style={({ isActive }) => changeBg(isActive)}
        to="/main"
      >
        main
      </NavLink>
      <NavLink
        className={styles.navbarLink}
        style={({ isActive }) => changeBg(isActive)}
        to="/settings"
      >
        settings
      </NavLink>
    </div>
  );
};

export default Navbar;
