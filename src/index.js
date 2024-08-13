import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import GameCollection from './pages/GameCollection'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Game from './components/Game';
import ErrorEle from './components/ErrorEle';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home />,
    errorElement : <ErrorEle />
  },
  {
    path : "/collection",
    element : <GameCollection />
  },
  {
    path : "/games/:gameId",
    element : <Game />
  },
  {
    path : "/profile",
    element : <Profile />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

