import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilteringMenu from './FilteringMenu';
import { Ticket } from '../types/types';
import TicketsContainer from './TicketsContainer';
import { sortTickets } from '../utils/utils';

function Main() {
  const [tickets, setTickets] = useState<Array<Ticket>>([]);
  const [currentTickets, setCurrentTickets] = useState<Array<Ticket>>([]);
  const [error, setError] = useState<string>('');
  useEffect(() => {
    const responceSearch = axios.get('https://front-test.beta.aviasales.ru/search');
    responceSearch.then(({ data }) => {
      const responceTickets = axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${data.searchId}`);
      responceTickets.then((dataTickets) => {
        const allTickets = dataTickets.data.tickets.map(
          (ticket: object, ind: number) => ({ ...ticket, id: ind }),
        );
        setTickets(allTickets);
        setCurrentTickets(sortTickets(allTickets));
      })
        .catch((err) => {
          setError(err);
        });
    });
  }, []);
  return (
    <main>
      <FilteringMenu
        setCurrentTickets={setCurrentTickets}
        tickets={tickets}
      />
      {error ? <div>{error}</div> : (
        <TicketsContainer
          tickets={tickets}
          setCurrentTickets={setCurrentTickets}
          currentTickets={currentTickets}
        />
      )}
    </main>
  );
}

export default Main;
