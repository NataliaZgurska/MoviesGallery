import { useState } from 'react';
import css from './SearchForm.module.css';

const SearchForm = ({ searchMovie }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchMovie(query);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.formInput}
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onChange={handleChange}
      />
      <button type="submit" className={css.formBtn}>
        🔍Search
      </button>
    </form>
  );
};

export default SearchForm;
