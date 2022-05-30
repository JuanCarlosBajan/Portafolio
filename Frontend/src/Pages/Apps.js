import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import Element from '../Components/Element.jsx';

export default function Apps() {
  const projects = [
    {
      title: 'Check Your Life',
      imgs: [],
      github: '',
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
          //img={project.imgs[0]}
          title={project.title}
          description={project.description}
          tecnologies={project.tecnologies}
        />
      ))}
    </div>
  );
}
