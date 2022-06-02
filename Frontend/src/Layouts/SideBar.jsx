import React, { useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { SiGmail } from 'react-icons/si';
import { Skeleton, useToast } from '@chakra-ui/react';
import JuanCa from '../Assets/Images/JuanCa.jpg';
import Stats from '../Components/Stats.jsx';

export default function SideBar() {
  useEffect(() => {
    const imgPersonal = document.getElementById('personal_picture');
    const connectedCircle = document.getElementById('connected');
    const provissionalImg = document.getElementById('provissional_picture_img');
    imgPersonal.onload = () => {
      provissionalImg.hidden = true;
      imgPersonal.hidden = false;
      connectedCircle.hidden = false;
    };
  });

  const toast = useToast();

  return (
    <div>
      <div className="personal_profile">
        <div className="picture_container">
          <div className="picture">
            <img
              id="personal_picture"
              hidden
              className="juanca_picture"
              src={JuanCa}
            ></img>
            <Skeleton
              id="provissional_picture_img"
              height="100%"
              width="100%"
            />
          </div>
          <div id="connected" hidden className="color_circle"></div>
        </div>
        <div className="text_name">Juan Carlos Baján</div>
        <div className="text_profession">Computer Science Student</div>
      </div>
      <div className="personal_info">
        <div className="social_media">
          <FaGithub
            size={36}
            color="aliceblue"
            cursor="pointer"
            onClick={() => {
              window.location.replace('https://github.com/JuanCarlosBajan');
            }}
          />
          <RiInstagramFill
            size={40}
            color="aliceblue"
            cursor="pointer"
            onClick={() => {
              window.location.replace('https://www.instagram.com/jcbajan17/');
            }}
          />
          <SiGmail
            size={40}
            color="aliceblue"
            cursor="pointer"
            onClick={() => {
              navigator.clipboard.writeText('juancarlosbajan@hotmail.com');
              toast({
                title: 'Copied mail to clipboard',
                position: 'top-left',
                isClosable: true,
              });
            }}
          />
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
