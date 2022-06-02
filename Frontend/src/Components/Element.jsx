import React from 'react';
import { Badge, useDisclosure } from '@chakra-ui/react';
import MoreInfo from './MoreInfo.jsx';

export default function Element(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div
        className="element_container project_grid_container"
        onClick={onOpen}
      >
        <img src={props.imgs[0]} className="element_img" />
        <div className="element_info">
          <div className="element_title">{props.title}</div>
          <div className="element_description">{props.description}</div>
          <div className="element_tecnologies">
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
        </div>
        <MoreInfo
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          title={props.title}
          description={props.description}
          tecnologies={props.tecnologies}
          imgs={props.imgs}
          github={props.github}
        />
      </div>
    </>
  );
}
