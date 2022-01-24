import React from 'react';
import { Props } from '../types/types';

function FilteringMenu({ sortTickets, tickets }: Props) {
  return (
    <div className="filtering-menu">
      <h2>Количество пересадок</h2>
      <form>
        <div className="filtering-menu-item">
          <label htmlFor="all">
            <input id="all" type="checkbox" value="test" />
            Все
          </label>
        </div>
        <div className="filtering-menu-item">
          <label htmlFor="without">
            <input id="without" type="checkbox" value="test" />
            Без пересадок
          </label>
        </div>
        <div className="filtering-menu-item">
          <label htmlFor="oneStop">
            <input id="oneStop" type="checkbox" value="test" />
            1 пересадка
          </label>
        </div>
        <div className="filtering-menu-item">
          <label htmlFor="twoStop">
            <input id="twoStop" type="checkbox" value="test" />
            2 пересадки
          </label>
        </div>
        <div className="filtering-menu-item">
          <label htmlFor="threeStop">
            <input id="threeStop" type="checkbox" value="test" />
            3 пересадки
          </label>
        </div>
      </form>
    </div>
  );
}

export default FilteringMenu;
