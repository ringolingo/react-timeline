import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  
  const eventComponents = props.events.map((event, i) => {
    return (
      <div key={i}>
        <TimelineEvent person={ event.person } timeStamp={ event.timeStamp } status={ event.status } />
      </div>
    )
  })
  return eventComponents;
}

export default Timeline;