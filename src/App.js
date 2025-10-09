import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Books from "./pages/Books";
import Music from "./pages/Music";
import MoviesTV from "./pages/MoviesTV";
import Games from "./pages/Games";
import ContactMe from "./pages/ContactMe";
import ErrorPage from "./error/ErrorPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NoMatch from "./error/NoMatch";

//Routing function
function App() {
  //due to hash routing, requires origin + '/#/' to render site, navs to home if URL is not formatted correctly.
  if (
    window.location.href === window.location.origin ||
    window.location.hash.substring(0, 2) != "#/"
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
