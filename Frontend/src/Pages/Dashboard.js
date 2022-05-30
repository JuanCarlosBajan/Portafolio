import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGamepad, FaAppStore, FaHtml5 } from 'react-icons/fa';
import { AiOutlineStock } from 'react-icons/ai';
import { FiHeadphones } from 'react-icons/fi';
import { CgCross } from 'react-icons/cg';
import { SimpleGrid, Box, Skeleton } from '@chakra-ui/react';
import Title from '../Components/Title.jsx';

export default function Dashboard() {
  useEffect(() => {
    const imgtitle = document.getElementById('titleimg');
    const texttitle = document.getElementById('titletext');
    const provissionalImg = document.getElementById('provissional_img');
    imgtitle.onload = () => {
      provissionalImg.hidden = true;
      imgtitle.hidden = false;
      texttitle.hidden = false;
    };
  });

  return (
    <>
      <div className="dashboard_container">
        <Skeleton id="provissional_img" height="40vh" borderRadius={'1vw'} />
        <Title />
        <div className="projects_container">
          <SimpleGrid columns={3} spacing={'2vw'}>
            <Box
              bg="rgb(51, 53, 80)"
              height="30vh"
              className="project_grid_container"
            >
              <Link className="grid_projects" to="/Games">
                <FaGamepad size={100} color="aliceblue" />
                <div className="projects_title">Games</div>
              </Link>
            </Box>
            <Box
              bg="rgb(51, 53, 80)"
              height="30vh"
              className="project_grid_container"
            >
              <Link className="grid_projects" to="/Apps">
                <FaAppStore size={100} color="aliceblue" />
                <div className="projects_title">Apps</div>
              </Link>
            </Box>
            <Box
              bg="rgb(51, 53, 80)"
              height="30vh"
              className="project_grid_container"
            >
              <Link className="grid_projects" to="/Web">
                <FaHtml5 size={100} color="aliceblue" />
                <div className="projects_title">Web</div>
              </Link>
            </Box>
          </SimpleGrid>
          <Link to="/Me">
            <div className="hobbies_container project_grid_container">
              <SimpleGrid columns={3} spacing={'2vw'}>
                <Box height="30vh">
                  <div className="grid_projects">
                    <FiHeadphones size={100} color="aliceblue" />
                    <div className="projects_title">Music Lover</div>
                  </div>
                </Box>
                <Box height="30vh">
                  <div className="grid_projects">
                    <CgCross size={100} color="aliceblue" />
                    <div className="projects_title">Jesus Follower</div>
                  </div>
                </Box>
                <Box height="30vh">
                  <div className="grid_projects">
                    <AiOutlineStock size={100} color="aliceblue" />
                    <div className="projects_title">Investor</div>
                  </div>
                </Box>
              </SimpleGrid>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
