import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../imageGalleryItem/imageGalleryItem";
import ImageGalleryEl from "./imageGallery.styles";

const ImageGallery = ({ items, showModal, onShowModalImg }) => {
  return (
    <ImageGalleryEl>
      {items.map((item) => (
        <ImageGalleryItem
          key={item.id}
          item={item}
          showModal={showModal}
          onShowModalImg={onShowModalImg}
        />
      ))}
    </ImageGalleryEl>
  );
};
ImageGallery.propTypes = {
  items: PropTypes.arrayOf({
    item: PropTypes.shape.isRequired,
  }),
  showModal: PropTypes.func.isRequired,
  onShowModalImg: PropTypes.func.isRequired,
};
export default ImageGallery;
