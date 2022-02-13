import React from 'react';
import Ticket from './Ticket';
import { Props, PropsTicket } from '../types/types';

function ListTickets({
  currentTickets = [], countCurrTickets,
}: Props) {
  const currTickets = currentTickets.slice(0, countCurrTickets);
  return (
    <div className="list-tickets">
      {currTickets.map((ticket: PropsTicket) => <Ticket ticket={ticket} />)}
    </div>
  );
}

export default ListTickets;
