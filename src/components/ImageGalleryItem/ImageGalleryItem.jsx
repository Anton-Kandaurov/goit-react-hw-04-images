import PropTypes from 'prop-types';
import { ImageGalleryElement, ImageGalleryElementImg, } from './styled';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  showModal,
}) => {
  return (
    <ImageGalleryElement key={id}>
      <ImageGalleryElementImg
        src={webformatURL}
        alt="photo"
        data={largeImageURL}
        onClick={() => showModal(largeImageURL)}
      />
    </ImageGalleryElement>
  );
};


ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};
