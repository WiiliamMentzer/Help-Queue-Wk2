import React from 'react';
import Ticket from './Ticket';

const mainTicketList = [
  {
    names: 'Thanatos and Hedgehog',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp'
  },
  {
    names: 'Angel and Moon',
    location: '4B',
    issue: 'Prop types are throwing an error'
  },
  {
    names: 'Shinji and Robot',
    location: '9F',
    issue: 'Editor\'s note: He did NOT get in. Child component isn\'t rednering.'
  },
];


function TicketList() {
  return (
    <React.Fragment>
      <hr/>
      {mainTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        key={index} />
      )}
    </React.Fragment>
  );
}

export default TicketList;