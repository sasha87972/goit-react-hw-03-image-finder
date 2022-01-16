import React from "react";
import PropTypes from "prop-types";
import {
  ImageGalleryItemEl,
  ImageGalleryItemImg,
} from "./imageGalleryItem.styles";

const ImageGalleryItem = ({ item, onShowModalImg }) => {
  const largeImg = { src: item.largeImageURL, alt: item.tags };
  return (
    <ImageGalleryItemEl key={item.id}>
      <ImageGalleryItemImg
        src={item.webformatURL}
        alt={item.tags}
        onClick={() => onShowModalImg(largeImg)}
      />
    </ImageGalleryItemEl>
  );
};
ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
    largeImageURL: PropTypes.string.isRequired,
  }),
  onShowModalImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
