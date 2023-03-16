import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import SingleFilmPage from './pages/SingleFilmPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="movies/:id" element={<SingleFilmPage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
