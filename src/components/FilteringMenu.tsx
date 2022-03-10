import React, { useEffect, useState } from 'react';
import { PropsFilteringMenu, PropsTicket } from '../types/types';
import { mappingSort } from '../utils/utils';

const filterTickets = (
  tickets: Array<PropsTicket>,
  currSort: string,
  setCurrentTickets: React.Dispatch<React.SetStateAction<PropsTicket[]>>,
  options: Array<string>,
) => {
  if (!currSort) {
    return;
  }
  const sort = mappingSort[currSort];
  if (options.includes('all') || !options.length) {
    setCurrentTickets(sort(tickets));
  } else {
    const newCurrTickets = tickets.filter((ticket) => {
      const segment = ticket.segments[0];
      return options.includes(String(segment.stops.length));
    });
    setCurrentTickets(sort(newCurrTickets));
  }
};

const onClickOptions = (
  options: Array<string>,
  setOptions: React.Dispatch<React.SetStateAction<string[]>>,
) => (ev: any) => {
  const { checked } = ev.target;
  if (checked && (ev.target.dataset.stops === 'all' || options.includes('all'))) {
    setOptions(['all']);
    return;
  }
  if (checked) {
    setOptions([...options, ev.target.dataset.stops]);
  } else {
    setOptions(options.filter((option) => option !== ev.target.dataset.stops));
  }
};

const items = [
  {
    name: 'Все',
    stops: 'all',
    id: 'all',
  },
  {
    name: 'Без пересадок',
    stops: '0',
    id: 'without',
  },
  {
    name: '1 пересадка',
    stops: '1',
    id: 'oneStop',
  },
  {
    name: '2 пересадки',
    stops: '2',
    id: 'twoStop',
  },
  {
    name: '3 пересадки',
    stops: '3',
    id: 'threeStop',
  },
];

function FilteringMenu({ setCurrentTickets, tickets, currSort }: PropsFilteringMenu) {
  const [options, setOptions] = useState<Array<string>>([]);
  useEffect(() => {
    filterTickets(tickets, currSort, setCurrentTickets, options);
  }, [options]);
  return (
    <div className="filter-menu">
      <h2 className="filter-menu__header">Количество пересадок</h2>
      <form>
        <div role="button" tabIndex={0} onKeyDown={onClickOptions(options, setOptions)} onClick={onClickOptions(options, setOptions)}>
          {items.map((item) => (
            <div className="filter-menu__item">
              <input id={item.id} type="checkbox" className="checkbox-real" data-stops={item.stops} />
              <label htmlFor={item.id} className="checkbox-fake">
                {item.name}
                <div className="checkmark" />
              </label>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default FilteringMenu;
