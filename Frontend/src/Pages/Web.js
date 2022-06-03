import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import SWA1 from '../Assets/Images/StreamingAppWeb/1.png';
import SWA2 from '../Assets/Images/StreamingAppWeb/2.png';
import SWA3 from '../Assets/Images/StreamingAppWeb/3.png';
import SWA4 from '../Assets/Images/StreamingAppWeb/4.png';
import SWA5 from '../Assets/Images/StreamingAppWeb/5.png';
import SWA6 from '../Assets/Images/StreamingAppWeb/6.png';
import ALS1 from '../Assets/Images/AnimalLifeSimulatorWeb/1.png';
import ALS2 from '../Assets/Images/AnimalLifeSimulatorWeb/2.png';
import ALS3 from '../Assets/Images/AnimalLifeSimulatorWeb/3.png';
import ALS4 from '../Assets/Images/AnimalLifeSimulatorWeb/4.png';
import KA1 from '../Assets/Images/KimiaviationWeb/1.png';
import KA2 from '../Assets/Images/KimiaviationWeb/2.png';
import KA3 from '../Assets/Images/KimiaviationWeb/3.png';
import KA4 from '../Assets/Images/KimiaviationWeb/4.png';
import KA5 from '../Assets/Images/KimiaviationWeb/5.png';
import KA6 from '../Assets/Images/KimiaviationWeb/6.png';
import Element from '../Components/Element.jsx';

export default function Web() {
  const projects = [
    {
      title: 'Streaming Web App',
      imgs: [SWA1, SWA2, SWA3, SWA4, SWA5, SWA6],
      github: [
        'https://github.com/JuanCarlosBajan/Streaming-App',
        'https://github.com/guillermoSb/proyectodb-api',
      ],
      description:
        'This project counts with a dedicated API, was created to connect a robust data-base and a intuitive front-end design. Manages users, movies, series, seasons, actors, directors, favourite movies and more.',
      tecnologies: [
        {
          title: 'JavaScript',
          color: 'yellow',
        },
        {
          title: 'React',
          color: 'twitter',
        },
        {
          title: 'PostgreSQL',
          color: 'green',
        },
        {
          title: 'KnexJS',
          color: 'orange',
        },
        {
          title: 'Express',
          color: 'red',
        },
        {
          title: 'CSS',
          color: 'blue',
        },
      ],
    },
    {
      title: 'Kimiaviation Clon',
      imgs: [KA1, KA2, KA3, KA4, KA5, KA6],
      github: ['https://github.com/JuanCarlosBajan/kimiaviation'],
      description:
        'This project was created to practice all the strategies and technologies learned so far. Tries to replicate as closely as possible to the main page from scratch (kimiaviation.com)',
      tecnologies: [
        {
          title: 'JavaScript',
          color: 'yellow',
        },
        {
          title: 'React',
          color: 'twitter',
        },
        {
          title: 'WebPack',
          color: 'blue',
        },
        {
          title: 'Eslint',
          color: 'pink',
        },
        {
          title: 'SASS',
          color: 'purple',
        },
        {
          title: 'Prettier',
          color: 'orange',
        },
        {
          title: 'Babel',
          color: 'yellow',
        },
      ],
    },
    {
      title: 'Animal Life Simulator',
      imgs: [ALS1, ALS2, ALS3, ALS4],
      github: [
        'https://github.com/JuanCarlosBajan/Animal-Life-Simulator-Web-Page',
      ],
      description:
        'This web page is a short game where the user immerses himself in the story of a monkey and a lion. It contains different paths by which the user can move and reach unexpected ends.',
      tecnologies: [
        {
          title: 'JavaScript',
          color: 'yellow',
        },
        {
          title: 'WebPack',
          color: 'blue',
        },
        {
          title: 'SASS',
          color: 'purple',
        },
        {
          title: 'HTML',
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
