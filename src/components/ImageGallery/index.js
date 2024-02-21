import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="image-gallery">
      <div className="image-thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnailUrl}
            alt={`Thumbnail ${index}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      <div className="selected-image">
        {selectedImage !== null && (
          <img
            src={images[selectedImage].url}
            alt={`Selected Image ${selectedImage}`}
          />
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
