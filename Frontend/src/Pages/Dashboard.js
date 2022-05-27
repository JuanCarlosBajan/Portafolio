import React from 'react';
import { FaGamepad, FaAppStore, FaHtml5 } from 'react-icons/fa';
import { AiOutlineStock } from 'react-icons/ai';
import { FiHeadphones } from 'react-icons/fi';
import { CgCross } from 'react-icons/cg';
import { SimpleGrid, Box } from '@chakra-ui/react';
import Title from '../Components/Title.jsx';

export default function Dashboard() {
  return (
    <>
      <div className="dashboard_container">
        <Title />
        <div className="projects_container">
          <SimpleGrid columns={3} spacing={'2vw'}>
            <Box
              bg="rgb(51, 53, 80)"
              height="30vh"
              className="project_grid_container"
            >
              <div className="grid_projects">
                <FaGamepad size={100} color="aliceblue" />
                <div className="projects_title">Games</div>
              </div>
            </Box>
            <Box
              bg="rgb(51, 53, 80)"
              height="30vh"
              className="project_grid_container"
            >
              <div className="grid_projects">
                <FaAppStore size={100} color="aliceblue" />
                <div className="projects_title">Apps</div>
              </div>
            </Box>
            <Box
              bg="rgb(51, 53, 80)"
              height="30vh"
              className="project_grid_container"
            >
              <div className="grid_projects">
                <FaHtml5 size={100} color="aliceblue" />
                <div className="projects_title">Web</div>
              </div>
            </Box>
          </SimpleGrid>
          <div className="hobbies_container project_grid_container">
            <SimpleGrid columns={3} spacing={'2vw'}>
              <Box height="20vh">
                <div className="grid_projects">
                  <FiHeadphones size={100} color="aliceblue" />
                  <div className="projects_title">Music Lover</div>
                </div>
              </Box>
              <Box height="20vh">
                <div className="grid_projects">
                  <CgCross size={100} color="aliceblue" />
                  <div className="projects_title">Jesus Follower</div>
                </div>
              </Box>
              <Box height="20vh">
                <div className="grid_projects">
                  <AiOutlineStock size={100} color="aliceblue" />
                  <div className="projects_title">Investor</div>
                </div>
              </Box>
            </SimpleGrid>
          </div>
        </div>
      </div>
    </>
  );
}
