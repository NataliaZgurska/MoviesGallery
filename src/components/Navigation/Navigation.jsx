import { NavLink, Outlet } from 'react-router-dom';
import clsx from 'clsx';

import css from './Navigation.module.css';

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Navigation = () => {
  return (
    <>
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

      <Outlet />
    </>
  );
};

export default Navigation;
