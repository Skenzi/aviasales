import React, { useEffect, useState } from 'react';
import ListTickets from './ListTickets';
import SortedTabs from './SortedTabs';
import { PropsButton, PropsTicketsContainer } from '../types/types';

function ButtonAddTickets({
  setCountCurrTickets,
  countRestTickets,
  countCurrTickets,
}: PropsButton) {
  const handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = () => {
    const newCount = countCurrTickets + 5;
    setCountCurrTickets(newCount);
  };
  return (
    <button type="button" onClick={handleClick} className="button button-add-tickets">
      Посмотреть еще
      {' '}
      {countRestTickets}
      {' '}
      билетов
    </button>
  );
}

function TicketsContainer({
  tickets = [], statusTickets, currentTickets = [], setCurrentTickets, setCurrSort,
}: PropsTicketsContainer) {
  const [countCurrTickets, setCountCurrTickets] = useState<number>(5);
  useEffect(() => {
    setCountCurrTickets(5);
  }, [currentTickets]);
  const visibleTickets = currentTickets.slice(0, countCurrTickets);
  const diff = currentTickets.length - visibleTickets.length;
  const countRestTickets = diff >= 5 ? 5 : diff;
  return (
    <div className="tickets-container">
      <SortedTabs
        setCurrSort={setCurrSort}
        setCurrentTickets={setCurrentTickets}
        currentTickets={currentTickets}
      />
      <ListTickets
        visibleTickets={visibleTickets}
        statusTickets={statusTickets}
      />
      {diff ? (
        <ButtonAddTickets
          countRestTickets={countRestTickets}
          countCurrTickets={countCurrTickets}
          setCountCurrTickets={setCountCurrTickets}
        />
      ) : null}
    </div>
  );
}

export default TicketsContainer;
