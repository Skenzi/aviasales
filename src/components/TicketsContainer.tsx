import React, { useState } from 'react';
import ListTickets from './ListTickets';
import SortedTabs from './SortedTabs';
import { Props } from '../types/types';

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
  sortTickets, sortedTickets,
}: Props) {
  const [countCurrTickets, setCountCurrTickets] = useState<number>(5);
  return (
    <div>
      <SortedTabs />
      <ListTickets
        countCurrTickets={countCurrTickets}
        sortTickets={sortTickets}
        sortedTickets={sortedTickets}
      />
      <ButtonAddTickets
        countCurrTickets={countCurrTickets}
        setCountCurrTickets={setCountCurrTickets}
      />
    </div>
  );
}

export default TicketsContainer;
