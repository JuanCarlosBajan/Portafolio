import React from 'react';
import title from '../Assets/Images/title.png';

export default function Title() {
  return (
    <>
      <div className="title_container">
        <img id="titleimg" hidden className="title_img" src={title}></img>
        <div id="titletext" hidden className="title_general_text">
          ART CHALLENGES TECHNOLOGY AND TECHNOLOGY INSPIRES ART
        </div>
      </div>
    </>
  );
}
