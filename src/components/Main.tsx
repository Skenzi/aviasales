import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilteringMenu from './FilteringMenu';
import { PropsTicket } from '../types/types';
import TicketsContainer from './TicketsContainer';
import { sortTickets } from '../utils/utils';

function Main() {
  const [tickets, setTickets] = useState<Array<PropsTicket>>([]);
  const [currentTickets, setCurrentTickets] = useState<Array<PropsTicket>>([]);
  const [currSort, setCurrSort] = useState<string>('moneySort');
  const [error, setError] = useState<string>('');
  const [statusTickets, setStatusTickets] = useState('waiting');
  console.log(statusTickets, 1);
  useEffect(() => {
    const responceSearch = axios.get('https://front-test.beta.aviasales.ru/search');
    responceSearch.then(({ data }) => {
      console.log(data);
      const responceTickets = axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${data.searchId}`);
      responceTickets.then((dataTickets) => {
        const allTickets = dataTickets.data.tickets.map(
          (ticket: object, ind: number) => ({ ...ticket, id: ind }),
        );
        setTickets(allTickets);
        setCurrentTickets(sortTickets(allTickets));
        setStatusTickets('loaded');
      })
        .catch(() => {
          setError('Проблемы с сервером');
        });
    }).catch(() => {
      setError('Проблемы с сетью');
    });
  }, []);
  console.log(statusTickets, 2);
  return (
    <main className="main">
      <FilteringMenu
        setCurrentTickets={setCurrentTickets}
        currSort={currSort}
        tickets={tickets}
      />
      {error ? <div>{error}</div> : (
        <TicketsContainer
          tickets={tickets}
          statusTickets={statusTickets}
          setCurrSort={setCurrSort}
          setCurrentTickets={setCurrentTickets}
          currentTickets={currentTickets}
        />
      )}
    </main>
  );
}

export default Main;
