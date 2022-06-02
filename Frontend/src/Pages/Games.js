import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import DH1 from '../Assets/Images/DuckHuntGame/1.png';
import DH2 from '../Assets/Images/DuckHuntGame/2.png';
import DH3 from '../Assets/Images/DuckHuntGame/3.png';
import DH4 from '../Assets/Images/DuckHuntGame/4.png';
import TKH1 from '../Assets/Images/TheKeyHouseGame/1.png';
import TKH2 from '../Assets/Images/TheKeyHouseGame/2.png';
import TKH3 from '../Assets/Images/TheKeyHouseGame/3.png';
import TKH4 from '../Assets/Images/TheKeyHouseGame/4.png';
import TKH5 from '../Assets/Images/TheKeyHouseGame/5.png';
import MV1 from '../Assets/Images/MetaverseGame/1.png';
import MV2 from '../Assets/Images/MetaverseGame/2.png';
import MV3 from '../Assets/Images/MetaverseGame/3.png';
import MV4 from '../Assets/Images/MetaverseGame/4.png';
import MV5 from '../Assets/Images/MetaverseGame/5.png';
import LP1 from '../Assets/Images/LittlePlanetGame/1.png';
import LP2 from '../Assets/Images/LittlePlanetGame/2.png';
import LP3 from '../Assets/Images/LittlePlanetGame/3.png';
import LP4 from '../Assets/Images/LittlePlanetGame/4.png';
import LP5 from '../Assets/Images/LittlePlanetGame/5.png';
import Element from '../Components/Element.jsx';

export default function Games() {
  const projects = [
    {
      title: 'The Key House',
      imgs: [TKH1, TKH2, TKH3, TKH4, TKH5],
      github: ['https://github.com/JuanCarlosBajan/The-Key-House'],
      description:
        '3D Game developed with unity. Has three different levels. Simulates different scaping rooms, contains different tracks and an ending scene. All maps were modeled with blender.',
      tecnologies: [
        {
          title: 'Unity',
          color: 'purple',
        },
        {
          title: 'C#',
          color: 'green',
        },
        {
          title: 'Blender',
          color: 'orange',
        },
      ],
    },
    {
      title: 'Metaverse',
      imgs: [MV1, MV2, MV3, MV4, MV5],
      github: ['https://github.com/JuanCarlosBajan/metaverse'],
      description:
        '3D Game developed with unity. It is based on SDG 14, marine life, and was created with the purpose of making the population aware of the damage that is being caused. The map and some components were created with blender.',
      tecnologies: [
        {
          title: 'Unity',
          color: 'purple',
        },
        {
          title: 'C#',
          color: 'green',
        },
        {
          title: 'Blender',
          color: 'orange',
        },
      ],
    },
    {
      title: 'Duck Hunt',
      imgs: [DH4, DH2, DH3, DH1],
      github: ['https://github.com/JuanCarlosBajan/CazaPatos-Juego-'],
      description:
        '3D Game developed with unity. This project was created with the purpose of practicing RPG dynamics. Almost every model was created with blender.',
      tecnologies: [
        {
          title: 'Unity',
          color: 'purple',
        },
        {
          title: 'C#',
          color: 'green',
        },
        {
          title: 'Blender',
          color: 'orange',
        },
      ],
    },
    {
      title: 'Little Planet',
      imgs: [LP1, LP2, LP3, LP4, LP5],
      github: ['https://github.com/JuanCarlosBajan/Juego-Planeta-Chiquito-'],
      description:
        '3D Game developed with unity. First person controllers and special ilumination. The map and all the components were created with blender.',
      tecnologies: [
        {
          title: 'Unity',
          color: 'purple',
        },
        {
          title: 'C#',
          color: 'green',
        },
        {
          title: 'Blender',
          color: 'orange',
        },
      ],
    },
  ];

  return (
    <div className="dashboard_container">
      <Link className="return_button project_grid_container" to="/">
        <BiArrowBack size={20} color="aliceblue" />
      </Link>
      {projects.map((project) => (
        <Element
          key={project.title}
          imgs={project.imgs}
          title={project.title}
          description={project.description}
          tecnologies={project.tecnologies}
          github={project.github}
        />
      ))}
    </div>
  );
}
