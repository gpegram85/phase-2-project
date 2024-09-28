import App from './components/App';
import GameCollection from './pages/GameCollection';
import Home from './pages/Home';
import GameCard from './components/GameCard';
import ErrorEle from './components/ErrorEle';
import Blog from './pages/Blog';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorEle />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/games',
        element: <GameCollection />,
        children: [
          {
            path: '/games/:gameId',
            element: <GameCard />,
          },
        ],
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ],
  },
];

export default routes;
