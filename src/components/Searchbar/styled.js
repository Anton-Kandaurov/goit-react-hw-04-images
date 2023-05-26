import styled from 'styled-components';

export const SearchbarTop = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 2;
  display: flex;
  align-items: center;
  min-height: 64px;
  padding: 25px 12px;
  color: #888;
  background-color: #666;
`;

export const Search = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 25px;
  border: none;
  outline: none;
  padding-left: 5px;
  padding-right: 5px;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 55px;
  height: 55px;
  border: 0;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  cursor: pointer;
  outline: none;
`;

export const SearchButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;