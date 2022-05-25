import React from 'react';
//import { Divider } from '@chakra-ui/react';
import { FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { SiGmail } from 'react-icons/si';
import CodingStats from '../Components/CodingStats.jsx';
import LanguageStats from '../Components/LanguageStats.jsx';

export default function SideBar() {
  return (
    <div>
      <div className="personal_profile">
        <div className="picture_container">
          <div className="picture"></div>
        </div>
        <div className="text_name">Juan Carlos Baján</div>
        <div className="text_profession">Computer Science Student</div>
      </div>
      <div className="personal_info">
        <div className="social_media">
          <FaFacebook size={36} color="aliceblue" />
          <RiInstagramFill size={40} color="aliceblue" />
          <SiGmail size={40} color="aliceblue" />
        </div>
        <div className="language_title">Idiomas</div>
        <div className="language_skills">
          <LanguageStats title="Inglés" data={85} />
          <LanguageStats title="Español" data={100} />
        </div>

        <div className="coding_knowledge">
          <CodingStats title="Python" data={90} />
          <CodingStats title="Javascript" data={80} />
          <CodingStats title="Java" data={70} />
          <CodingStats title="PostgresSQL" data={50} />
        </div>
      </div>
    </div>
  );
}
