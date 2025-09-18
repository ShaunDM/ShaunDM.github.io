import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import Portfolio from "./portfolio/Portfolio";
import Books from "./books/Books";
import Music from "./music/Music";
import MoviesTV from "./movies_tv/MoviesTV";
import Games from "./games/Games";
import ContactMe from "./contact_me/ContactMe";
import ErrorPage from "./error/ErrorPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NoMatch from "./error/NoMatch";

function App() {
  if (
    window.location.href === window.location.origin ||
    !window.location.hash.includes("#/")
  ) {
    window.location.href = window.location.origin + "/#/";
    setTimeout(() => {
      window.location.reload();
    }, 0);
  }
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="books" element={<Books />} />
          <Route path="music" element={<Music />} />
          <Route path="movies_tv" element={<MoviesTV />} />
          <Route path="games" element={<Games />} />
          <Route path="contact_me" element={<ContactMe />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
