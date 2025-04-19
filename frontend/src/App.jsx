import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cities from './pages/Cities';
import CityDetail from './pages/CityDetail';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/cities",
    element: <Cities/>
  },
  {
    path: "/cities/:name", 
    element: <CityDetail/>
  },
  
  {
    path: "*",
    element: <NotFound />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;