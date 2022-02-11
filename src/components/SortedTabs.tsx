import React from 'react';
import { PropsSortTabs } from '../types/types';
import { sortTickets, sortTicketsTravelTime } from '../utils/utils';

const switchActiveTab = (setCurrSort: Function) => (ev: any) => {
  const tabs = ev.currentTarget.querySelectorAll('[role="tab"]');
  tabs.forEach((tab: HTMLElement) => {
    tab.classList.remove('active');
  });
  ev.target.classList.add('active');
  setCurrSort(ev.target.dataset.nameSort);
};

function SortedTabs({ currentTickets = [], setCurrSort, setCurrentTickets }: PropsSortTabs) {
  return (
    <div className="tabs" role="button" tabIndex={0} onKeyDown={switchActiveTab(setCurrSort)} onClick={switchActiveTab(setCurrSort)}>
      <button type="button" data-name-sort="moneySort" role="tab" onClick={() => setCurrentTickets(sortTickets(currentTickets))} className="button active button-tab">Самый дешевый</button>
      <button
        type="button"
        role="tab"
        onClick={() => setCurrentTickets(sortTicketsTravelTime(currentTickets))}
        data-name-sort="travelTimeSort"
        className="button button-tab"
      >
        Самый быстрый

      </button>
      <button type="button" role="tab" data-name-sort="optimum" className="button button-tab">Оптимальный</button>
    </div>
  );
}

export default SortedTabs;
