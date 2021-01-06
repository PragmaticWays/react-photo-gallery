import React, { useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

export default function PhotoGallery({ photos }) {
  const [photoIndex, setPhotoIndex] = useState(0);

  const prevPhoto = () => {
    let prevIndex = photoIndex - 1;
    if (prevIndex === -1) {
      prevIndex = photos.length - 1;
    }
    setPhotoIndex(prevIndex);
  };

  const nextPhoto = () => {
    let nextIndex = photoIndex + 1;
    setPhotoIndex(nextIndex % photos.length);
  };

  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  const handleTouchStart = (e) => {
    e.preventDefault();
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    checkForSwipe();
  };

  const checkForSwipe = () => {
    let swipeSensitivity = 100;
    if (touchStart - touchEnd > swipeSensitivity) {
      nextPhoto();
    }

    if (touchStart - touchEnd < -1 * swipeSensitivity) {
      prevPhoto();
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setTouchStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    setTouchEnd(e.clientX);
  };

  const handleMouseUp = () => {
    checkForSwipe();
  };

  return (
    <>
      {photos
        .filter((photo, index) => index === photoIndex)
        .map((photo, index) => {
          return (
            <div className='photo-container-outer' key={index}>
              <div
                className='photo-container-inner'
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              >
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
