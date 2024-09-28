import { Outlet } from 'react-router-dom';
import GameShelf from '../components/GameShelf';

function Collection() {
  return (
    <div>
      <main>
        <GameShelf />
      </main>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Collection;
