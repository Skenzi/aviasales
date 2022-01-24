import React from 'react';

function SortedTabs() {
  return (
    <div className="tabs">
      <button type="button" className="button active button-tub">Самый дешевый</button>
      <button type="button" className="button button-tub">Самый быстрый</button>
      <button type="button" className="button button-tub">Оптимальный</button>
    </div>
  );
}

export default SortedTabs;
