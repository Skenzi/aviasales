import React from 'react';
import Header from './Header';
import ListTikets from './ListTikets';
import SortingMenu from './SortingMenu';

function App() {
  return (
    <>
      <Header />
      <main>
        <SortingMenu />
        <ListTikets />
      </main>
    </>
  );
}

export default App;
