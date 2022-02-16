import React from 'react';
import Ticket from './Ticket';
import { PropsListTickets, PropsTicket } from '../types/types';

function ListTickets({
  currentTickets = [], countCurrTickets, statusTickets,
}: PropsListTickets) {
  const currTickets = currentTickets.slice(0, countCurrTickets);
  return (
    <div className="list-tickets">
      {statusTickets === 'waiting' ? <div>Идет загрузка</div> : currTickets.map((ticket: PropsTicket) => <Ticket ticket={ticket} />)}
    </div>
  );
}

export default ListTickets;
