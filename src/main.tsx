import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './index.css';
import Game from './pages/Game';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <NotFound />,
  children: [
    {
      index: true,
      element: <Home />,
    }, {
      path: '/game',
      element: <Game />,
    },
  ],
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
