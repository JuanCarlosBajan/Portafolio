import React from 'react';
import title from '../Assets/Images/title.png';

export default function Title() {
  return (
    <>
      <div className="title_container">
        <img className="title_img" src={title}></img>
        <div className="title_general_text">Games</div>
      </div>
    </>
  );
}
