import React from 'react';
import { Props } from '../types/types';

function FilteringMenu({ sortTickets }: Props) {
  return (
    <div className="side-bar">
      <h2>Количество пересадок</h2>
      <form>
        <div className="side-bar-item">
          <label htmlFor="all">
            <input id="all" type="checkbox" value="all" />
            Все
          </label>
        </div>
        <div className="side-bar-item">
          <label htmlFor="without">
            <input id="without" type="checkbox" value="without" />
            Без пересадок
          </label>
        </div>
        <div className="side-bar-item">
          <label htmlFor="oneStop">
            <input id="oneStop" type="checkbox" value="1" />
            1 пересадка
          </label>
        </div>
        <div className="side-bar-item">
          <label htmlFor="twoStop">
            <input id="twoStop" type="checkbox" value="2" />
            2 пересадки
          </label>
        </div>
        <div className="side-bar-item">
          <label htmlFor="threeStop">
            <input id="threeStop" type="checkbox" value="3" />
            3 пересадки
          </label>
        </div>
      </form>
    </div>
  );
}

export default FilteringMenu;
