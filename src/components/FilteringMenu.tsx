import React, { useEffect, useState } from 'react';
import { PropsFilteringMenu, PropsTicket } from '../types/types';
import { mappingSort } from '../utils/utils';

const filterTickets = (
  tickets: Array<PropsTicket>,
  currSort: string,
  setCurrentTickets: Function,
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

const onClickOptions = (options: Array<string>, setOptions: Function) => (ev: any) => {
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
          <div className="filter-menu__item">
            <label htmlFor="all">
              <input id="all" type="checkbox" data-stops="all" />
              Все
            </label>
          </div>
          <div className="filter-menu__item">
            <label htmlFor="without">
              <input id="without" type="checkbox" data-stops="0" />
              Без пересадок
            </label>
          </div>
          <div className="filter-menu__item">
            <label htmlFor="oneStop">
              <input id="oneStop" type="checkbox" data-stops="1" />
              1 пересадка
            </label>
          </div>
          <div className="filter-menu__item">
            <label htmlFor="twoStop">
              <input id="twoStop" type="checkbox" data-stops="2" />
              2 пересадки
            </label>
          </div>
          <div className="filter-menu__item">
            <label htmlFor="threeStop">
              <input id="threeStop" type="checkbox" data-stops="3" />
              3 пересадки
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FilteringMenu;
