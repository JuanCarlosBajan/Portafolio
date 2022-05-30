import React from 'react';
import { Badge } from '@chakra-ui/react';

export default function Element(props) {
  return (
    <>
      <div className="element_container project_grid_container">
        <img src={props.img} className="element_img" />
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
      </div>
    </>
  );
}
