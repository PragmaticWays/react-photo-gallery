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
