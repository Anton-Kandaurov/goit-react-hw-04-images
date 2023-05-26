import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  SearchbarTop,
  Search,
  SearchInput,
  SearchButton,
  SearchButtonLabel,
} from './styled';

export class Searchbar extends Component {
  state = {
    searchText: '',
  };

  handleChange = e => {
    this.setState({ searchText: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchText.trim() === '') {
      alert('Enter data for search');
      return;
    }
    this.props.onSubmit(this.state.searchText);
  };

  render() {
    return (
      <SearchbarTop>
        <Search onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </Search>
      </SearchbarTop>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
