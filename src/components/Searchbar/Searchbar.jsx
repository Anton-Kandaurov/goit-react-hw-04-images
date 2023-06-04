import PropTypes from 'prop-types';
import { SearchbarTop, Search, SearchInput, SearchButton, SearchButtonLabel, } from './styled';
import { useState } from 'react';

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
// export class Searchbar extends Component {
//   state = {
//     searchText: '',
//   };

//   handleChange = e => {
//     this.setState({ searchText: e.currentTarget.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.searchText.trim() === '') {
//       alert('Enter data for search');
//       return;
//     }
//     this.props.onSubmit(this.state.searchText);
//   };

//   render() {
//     return (
      // <SearchbarTop>
      //   <Search onSubmit={this.handleSubmit}>
      //     <SearchButton type="submit">
      //       <SearchButtonLabel>Search</SearchButtonLabel>
      //     </SearchButton>

      //     <SearchInput
      //       type="text"
      //       autoComplete="off"
      //       autoFocus
      //       placeholder="Search images and photos"
      //       value={this.state.text}
      //       onChange={this.handleChange}
      //     />
      //   </Search>
      // </SearchbarTop>
//     );
//   }
// }


