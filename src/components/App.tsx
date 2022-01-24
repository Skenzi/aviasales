import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/app.scss';
import Header from './Header';
import FilteringMenu from './FilteringMenu';
import { Ticket } from '../types/types';
import TicketsContainer from './TicketsContainer';

const sortTickets = (tickets: Array<Ticket>): Array<Ticket> => {
  const middleInd = Math.floor(tickets.length / 2);
  const middleValue = tickets[middleInd];
  const less = [];
  const much = [];
  for (let i = 0; i < tickets.length; i += 1) {
    if (tickets[i].price >= middleValue.price) {
      much.push(tickets[i]);
    } else {
      less.push(tickets[i]);
    }
  }
  return sortTickets([...less, middleValue, ...much]);
};

function App() {
  const [tickets, setTickets] = useState<Array<Ticket>>([]);
  const [sortedTickets, setSortedTickets] = useState<Array<Ticket>>([]);
  const [activeTab, setActiveTab] = useState<string>('price');
  useEffect(() => {
    const responceSearch = axios.get('https://front-test.beta.aviasales.ru/search');
    responceSearch.then(({ data }) => {
      const responceTickets = axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${data.searchId}`);
      responceTickets.then((dataTickets) => {
        const allTickets = dataTickets.data.tickets.map(
          (ticket: object, ind: number) => ({ ...ticket, id: ind }),
        );
        setTickets(allTickets);
        setSortedTickets(allTickets);
      });
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <FilteringMenu sortTickets={sortTickets} tickets={tickets} />
        <TicketsContainer
          sortTickets={sortTickets}
          sortedTickets={sortedTickets}
        />
      </main>
    </>
  );
}

export default App;
