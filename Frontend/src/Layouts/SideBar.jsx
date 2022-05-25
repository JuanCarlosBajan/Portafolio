import React from 'react';
//import { Divider } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { SiGmail } from 'react-icons/si';
import Stats from '../Components/Stats.jsx';

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
          <FaGithub size={36} color="aliceblue" />
          <RiInstagramFill size={40} color="aliceblue" />
          <SiGmail size={40} color="aliceblue" />
        </div>
        <div className="language_title section_primary_title">Languages</div>
        <div className="language_skills">
          <Stats title="English" data={85} />
          <Stats title="Spanish" data={100} />
        </div>
        <div className="language_title section_primary_title">
          Coding Skills
        </div>
        <div className="language_skills">
          <Stats title="JavaScript" data={80} />
          <Stats title="SCSS" data={80} />
          <Stats title="React" data={85} />
        </div>
        <div className="language_skills">
          <Stats title="Python" data={90} />
          <Stats title="PostgresSQL" data={70} />
          <Stats title="Unity" data={75} />
        </div>
      </div>
    </div>
  );
}
