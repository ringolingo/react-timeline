import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  
  const eventComponents = props.events.map((event, i) => {
    return (
      <TimelineEvent key={i} person={ event.person } timeStamp={ event.timeStamp } status={ event.status } />
    )
  })
  return eventComponents;
}

export default Timeline;