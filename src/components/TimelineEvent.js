import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <div className='timeline-event'>
      <p className='event-person'>{ props.event.person }</p>
      <p className='event-time'><Timestamp time={ props.event.timeStamp } /></p>
      <p className='event-status'>{ props.event.status }</p>
    </div>
  );
}

export default TimelineEvent;