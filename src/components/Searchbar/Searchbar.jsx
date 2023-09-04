import React, { useState } from 'react';
import style from './Searchbar.module.css';

import PropTypes from 'prop-types';

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <header className={style.searchbar}>
      <form onSubmit={handleSubmit}>
        <button type="submit">Search</button>

        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={event => {
            setSearchQuery(event.target.value);
          }}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
