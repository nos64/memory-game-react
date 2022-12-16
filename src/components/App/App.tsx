import { Routes, Route } from 'react-router-dom';

import GamePage from '../../pages/GamePage';
import NotFoundPage from '../../pages/NotFoundPage';
import StartPage from '../../pages/StartPage';
import Layout from '../Layout';

import { ROUTES } from '../../common/routes';

import './App.scss';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.START} element={<Layout />}>
        <Route index element={<StartPage />} />
        <Route path={ROUTES.GAME} element={<GamePage />} />
        <Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
