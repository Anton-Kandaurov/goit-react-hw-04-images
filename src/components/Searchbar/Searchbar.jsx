import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  SearchbarTop,
  Search,
  SearchInput,
  SearchButton,
  SearchButtonLabel,
} from './styled';

export function Searchbar({ onSubmit }) {
  const [searchText, setSearchText] = useState('');

  const handleChange = e => {
    setSearchText(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchText.trim() === '') {
      alert('Enter data for search');
      return;
    }
    onSubmit(searchText);
  };

  return (
    <SearchbarTop>
      <Search onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchButton>

        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchText}
          onChange={handleChange}
        />
      </Search>
    </SearchbarTop>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
