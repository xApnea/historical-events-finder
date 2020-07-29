import React from 'react';

function EventList(props) {
  let eventList = props.events.map((event, index) => {
    console.log(event);
    return <li key={index}>{`DATE: ${event.date} DESCRIPTION: ${event.description}`}</li>
  });

  return(
    <div>
      <h2>Events</h2>
      <ul>{eventList}</ul>
    </div>
  )
}

export default EventList;