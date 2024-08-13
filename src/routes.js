import App from "./components/App"
import GameCollection from './pages/GameCollection'
import Profile from './pages/Profile'
import Home from './pages/Home'
import GameCard from './components/GameCard';
import ErrorEle from './components/ErrorEle';

const routes = [
    {
      path : "/",
      element : <App />,
      errorElement : <ErrorEle />,
      children: [
        {
            path : "/",
            element : <Home />
        },
        {
          path : "/collection",
          element : <GameCollection />
        },
        {
          path : "/games/:gameId",
          element : <GameCard />
        },
        {
          path : "/profile",
          element : <Profile />
        }
      ]
    }
]

export default routes