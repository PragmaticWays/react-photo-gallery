import React from 'react';

export default function PhotoGallery({ photos }) {
  return (
    <>
      {photos.map((photo, index) => {
        return (
          <div key={index}>
            <img src={photo.url} alt={photo.caption} />
            <p>{photo.caption}</p>
          </div>
        );
      })}
    </>
  );
}
