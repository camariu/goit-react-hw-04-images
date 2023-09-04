import React from 'react';
import style from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ image, onImageClick }) {
  return (
    <li className={style.imageItem}  onClick={() => onImageClick(image)}>
      <img
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  onImageClick: PropTypes.func.isRequired,
};