import PropTypes from 'prop-types';
import { ModalOverlay, ModalContent } from './styled';

const Modal = ({ closeModal, children }) => {

  const BackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <ModalOverlay onClick={BackdropClick}>
      <ModalContent> 
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default Modal;
