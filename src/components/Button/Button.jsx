import { LoadButton } from './styled';
import PropTypes from 'prop-types';

export const Button = ({ handleClick }) => {
  return (
    <LoadButton type="button" onClick={handleClick}>
      Load more
    </LoadButton>
  );
};


Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
