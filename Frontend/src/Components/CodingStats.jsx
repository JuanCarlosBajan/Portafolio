import React from 'react';
import { Progress } from '@chakra-ui/react';

export default function CodingStats(props) {
  return (
    <div>
      <div className="coding_bar_container">
        <div className="coding_bar_title_text">{props.title}</div>
        <Progress value={props.data} hasStripe isAnimated size="sm" />
        <div className="percentage_text">{props.data}%</div>
      </div>
    </div>
  );
}
