import { useContext } from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DarkSideContext } from "./context/DarkSideContext";
import Layout from "./layout/Layout";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import SingleFilmPage from "./pages/SingleFilmPage";
import GlobalStyle from "./theme/GlobalStyle";

function App() {
  const { theme } = useContext(DarkSideContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="movies/:id" element={<SingleFilmPage />} />
      </Route>,
    ),
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
