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
import Test from "./test/Test";

function App() {
  console.log("test: 2");
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="books" element={<Books />} />
        <Route path="music" element={<Music />} />
        <Route path="movies_tv" element={<MoviesTV />} />
        <Route path="games" element={<Games />} />
        <Route path="contact_me" element={<ContactMe />} />
        <Route element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
