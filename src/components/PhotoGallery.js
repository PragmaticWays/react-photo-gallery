import React, { useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

export default function PhotoGallery({ photos }) {
  const [photoIndex, setPhotoIndex] = useState(0);

  const prevPhoto = () => {
    let prevIndex = photoIndex - 1;
    if (prevIndex == -1) {
      prevIndex = photos.length - 1;
    }
    setPhotoIndex(prevIndex);
  };

  const nextPhoto = () => {
    let nextIndex = photoIndex + 1;
    setPhotoIndex(nextIndex % photos.length);
  };

  return (
    <>
      {photos.map((photo, index) => {
        return (
          <div className='photo-container-outer' key={index}>
            <div className='photo-container-inner'>
              <img className='photo' src={photo.url} alt={photo.caption} />
              <MdNavigateBefore onClick={prevPhoto} className='icon before' />
              <MdNavigateNext onClick={nextPhoto} className='icon next' />
              <p className='caption'>{photo.caption}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
