import React from 'react';
import {
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  Tooltip,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

function Feature(props) {
  return (
    <Box p={5}>
      <img src={props.img} className="modal_img" />
    </Box>
  );
}

export default function MoreInfo(props) {
  function redirect(url) {
    window.location.replace(url);
  }

  function getLabel(len, idx) {
    if (len > 1) return idx === 0 ? 'Front-end' : 'Back-end';
    return 'Project';
  }

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        scrollBehavior="outside"
        size={'xl'}
        motionPreset="slideInRight"
      >
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
        <ModalContent
          backgroundColor={'rgb(51, 53, 80)'}
          color={'aliceblue'}
          width={'50vw'}
        >
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody height={'50vh'} textAlign="center">
            {props.description}
            <div className="info_badges_container">
              {props.github.map((element, index) => (
                <Tooltip
                  label={getLabel(props.github.length, index)}
                  placement="top-end"
                  bg={'aliceblue'}
                  color={'rgb(51, 53, 80)'}
                  hasArrow
                >
                  <Button
                    leftIcon={<FaGithub />}
                    colorScheme="gray"
                    variant="solid"
                    color={'rgb(51, 53, 80)'}
                    backgroundColor="aliceblue"
                    marginX={'1vw'}
                    onClick={() => {
                      redirect(element);
                    }}
                  >
                    GitHub
                  </Button>
                </Tooltip>
              ))}
            </div>
            <div className="info_badges_container">
              {props.tecnologies.map((element) => (
                <Badge
                  key={props.title + element.title}
                  variant="outline"
                  colorScheme={element.color}
                  marginX="0.5vw"
                >
                  {element.title}
                </Badge>
              ))}
            </div>
            {props.imgs.map((element) => (
              <Feature img={element} />
            ))}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
