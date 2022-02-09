import React, { useState } from 'react';
import ListTickets from './ListTickets';
import SortedTabs from './SortedTabs';
import { Props, PropsTicketsContainer } from '../types/types';

interface ButtonProps {
    setCountCurrTickets: Function,
    countCurrTickets: number
}

function ButtonAddTickets({ setCountCurrTickets, countCurrTickets }: ButtonProps) {
  const handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = () => {
    const newCount = countCurrTickets + 5;
    setCountCurrTickets(newCount);
  };
  return <button type="button" onClick={handleClick} className="button">Посмотреть еще 5 билетов</button>;
}

function TicketsContainer({
  tickets = [], currentTickets = [], setCurrentTickets,
}: PropsTicketsContainer) {
  const [countCurrTickets, setCountCurrTickets] = useState<number>(5);
  return (
    <div>
      <SortedTabs setCurrentTickets={setCurrentTickets} currentTickets={currentTickets} />
      <ListTickets
        countCurrTickets={countCurrTickets}
        currentTickets={currentTickets}
      />
      <ButtonAddTickets
        countCurrTickets={countCurrTickets}
        setCountCurrTickets={setCountCurrTickets}
      />
    </div>
  );
}

export default TicketsContainer;
