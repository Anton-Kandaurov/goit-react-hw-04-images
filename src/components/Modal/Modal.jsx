import { createPortal } from 'react-dom';
import { ModalOverlay, ModalContent } from './styled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');


export function Modal({ children, handleClose }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose]);

  
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      handleClose();
    }
  };

  return createPortal(
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </ModalOverlay>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func.isRequired,
};

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.handleClose();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.handleClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <ModalOverlay onClick={this.handleBackdropClick}>
//         <ModalContent>{this.props.children}</ModalContent>
//       </ModalOverlay>,
//       modalRoot
//     );
//   }
// }


