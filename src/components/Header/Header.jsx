import { NavLink, Outlet } from 'react-router-dom';
import clsx from 'clsx';
import css from './Header.module.css';

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.nav}>
            <li>
              <NavLink to="/" className={getNavLinkClassName}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={getNavLinkClassName}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
