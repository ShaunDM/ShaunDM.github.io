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
import { useState, useEffect } from "react";
import { PropContext } from "./PropContext";
import loadMultipleFiles from "../util/loadMultipleFiles";

const [path, setPath] = useState(window.location.hash.substring(1));
const [index, setIndex] = useState(0);
const [format, setFormat] = useState(true);
const [assets, setAssets] = useState(loadMultipleFiles(path));
const handleSelectIndex = (selectedIndex) => {
  setIndex(selectedIndex);
};
const handleSelectFormat = (selectedFormat) => {
  if (selectedFormat)
    setAssets({ ...assets, sidebar: { ...assets.sidebar, type: "list" } });
  else
    setAssets({
      ...assets,
      sidebar: { ...assets.sidebar, type: "carousel" },
    });
  setFormat(selectedFormat);
};

const handleSelectPath = (selectedPath) => {
  setPath(selectedPath);
};

useEffect(() => {
  function getAssets() {
    setAssets(loadMultipleFiles(path));
  }

  if (path.substring(1) !== assets.origin) {
    getAssets();
  }

  return () => setAssets(null);
}, [assets]);

console.log(path, assets);

function App() {
  return (
    <PropContext.Provider
      value={{
        assets: assets,
        index: index,
        handleSelectIndex: handleSelectIndex,
        format: format,
        handleSelectFormat: handleSelectFormat,
        path: path,
        handleSelectPath: handleSelectPath,
      }}
    >
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
    </PropContext.Provider>
  );
}

export default App;
