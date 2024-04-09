import { NavLink, Route, Routes } from 'react-router-dom';
import clsx from 'clsx';
import css from './App.module.css';
import HomePage from './pages/HomePage';

function App() {
  const getNavLinkClassName = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });
  return (
    <>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/homepage">
            Home
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/moviedetails">
            Moviedetails
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/search">
            Search
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
