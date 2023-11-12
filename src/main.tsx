import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Game from './pages/Game';
import Provider from './context/Provider';
import './index.css';

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
  <CookiesProvider defaultSetOptions={{ path: '/' }}>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </CookiesProvider>,
);
