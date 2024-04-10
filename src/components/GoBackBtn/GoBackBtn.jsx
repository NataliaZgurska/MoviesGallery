import { Link } from 'react-router-dom';
import css from './GoBackBtn.module.css';
const GoBackBtn = ({ to }) => {
  return (
    <Link className={css.link} to={to}>
      🔙Go Back
    </Link>
  );
};

export default GoBackBtn;
