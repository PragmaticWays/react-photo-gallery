import React from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

export default function PhotoGallery({ photos }) {
  const prevPhoto = () => {
    console.log('previous photo');
  };

  const nextPhoto = () => {
    console.log('next photo');
  };

  return (
    <>
      {photos.map((photo, index) => {
        return (
          <div key={index}>
            <img src={photo.url} alt={photo.caption} />
            <MdNavigateBefore onClick={prevPhoto} />
            <MdNavigateNext onClick={nextPhoto} />
            <p>{photo.caption}</p>
          </div>
        );
      })}
    </>
  );
}
