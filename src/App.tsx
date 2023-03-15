import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Layout from './layout/Layout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="movies/:id" element={<SingleFilmPage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
