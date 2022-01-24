import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/app.scss';
import Header from './Header';
import ListTickets from './ListTikets';
import SortingMenu from './SortingMenu';

function App() {
  const [tickets, setTickets] = useState([]);
  const [sortedTickets, setSortedTickets] = useState<Array<object>>([]);
  const [currTickets, setCurrTickets] = useState([]);
  const sortTickets = () => {
    setSortedTickets([{ n: 1 }]);
  };
  useEffect(() => {
    const responceSearch = axios.get('https://front-test.beta.aviasales.ru/search');
    responceSearch.then(({ data }) => {
      const responceTickets = axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${data.searchId}`);
      responceTickets.then((dataTickets) => {
        const allTickets = dataTickets.data.tickets.map(
          (ticket: object, ind: number) => ({ ...ticket, id: ind }),
        );
        setTickets(allTickets);
        setCurrTickets(allTickets.slice(0, 5));
      });
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <SortingMenu sortTickets={sortTickets} tickets={tickets} />
        <ListTickets
          sortTickets={sortTickets}
          currTickets={currTickets}
        />
      </main>
    </>
  );
}

export default App;
