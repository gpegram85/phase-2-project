import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </>
  );
}

export default App;
