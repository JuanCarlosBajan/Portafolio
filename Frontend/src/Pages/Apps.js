import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import CYL1 from '../Assets/Images/CheckYourLifeApp/1.PNG';
import CYL2 from '../Assets/Images/CheckYourLifeApp/2.PNG';
import CYL3 from '../Assets/Images/CheckYourLifeApp/3.PNG';
import Element from '../Components/Element.jsx';

export default function Apps() {
  const projects = [
    {
      title: 'Check Your Life',
      imgs: [CYL1, CYL2, CYL3],
      github: ['https://github.com/MarianoReyes/CheckYourLife'],
      description:
        'This project aims to provide all the necessary tools for each user to manage their personal resources (Money, Time, Goals and Tasks) in the best way.',
      tecnologies: [
        {
          title: 'JavaScript',
          color: 'yellow',
        },
        {
          title: 'React Native',
          color: 'twitter',
        },
        {
          title: 'Expo',
          color: 'blackAlpha',
        },
        {
          title: 'Firebase',
          color: 'orange',
        },
        {
          title: 'IOS',
          color: 'gray',
        },
        {
          title: 'Android',
          color: 'whatsapp',
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
