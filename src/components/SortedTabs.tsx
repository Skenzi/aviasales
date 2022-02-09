import React from 'react';
import { PropsSortTabs } from '../types/types';
import { sortTickets, sortTicketsTravelTime } from '../utils/utils';

const switchActiveTab = (ev: any) => {
  const tabs = ev.currentTarget.querySelectorAll('[role="tab"]');
  tabs.forEach((tab: HTMLElement) => {
    tab.classList.remove('active');
  });
  ev.target.classList.add('active');
};

function SortedTabs({ currentTickets = [], setCurrentTickets }: PropsSortTabs) {
  return (
    <div className="tabs" role="button" tabIndex={0} onKeyDown={switchActiveTab} onClick={switchActiveTab}>
      <button type="button" role="tab" onClick={() => setCurrentTickets(sortTickets(currentTickets))} className="button active button-tab">Самый дешевый</button>
      <button type="button" role="tab" onClick={() => {
        const test = sortTicketsTravelTime(currentTickets);
        console.log(test);
        setCurrentTickets(test);
      }} className="button button-tab">Самый быстрый</button>
      <button type="button" role="tab" className="button button-tab">Оптимальный</button>
    </div>
  );
}

export default SortedTabs;
