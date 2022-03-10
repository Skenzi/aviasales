import React from 'react';
import Ticket from './Ticket';
import { PropsListTickets, PropsTicket } from '../types/types';

function ListTickets({
  visibleTickets, statusTickets,
}: PropsListTickets) {
  return (
    <div className="list-tickets">
      {statusTickets === 'waiting' ? <div>Идет загрузка</div> : visibleTickets.map((ticket: PropsTicket) => <Ticket key={ticket.id} ticket={ticket} />)}
    </div>
  );
}

export default ListTickets;
