import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import routes from './routes';

// import GameCollection from './pages/GameCollection'
// import Profile from './pages/Profile'
// import Home from './pages/Home'
// import GameCard from './components/GameCard';
// import ErrorEle from './components/ErrorEle';

const router = createBrowserRouter(routes);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

