/*require.context does not work with .mjs file, however resetCalendar.js 
needs api.mjs to keep that extension. Couldn't figure out how to import multiple files
without require.context.*/

import { getAssetId } from "./api.mjs";

export default function loadMultipleFiles(path) {
  let assets = {};

  const truncatedPath = path.substring(1).includes("/")
    ? path.substring(0, path.substring(1).indexOf("/") + 1)
    : path;

  function getAssets(files) {
    files.keys().forEach((file) => {
      const newKey = getAssetId(file.replace("./", ""));
      const slash = newKey.indexOf("/");
      if (slash >= 0) {
        assets[newKey.slice(0, slash)] = {
          ...assets[newKey.slice(0, slash)],
          [newKey.slice(slash + 1)]: files(file),
        };
      } else {
        assets = { ...assets, [newKey]: files(file) };
      }
    });
  }
  switch (truncatedPath) {
    case "/":
    case "/home": {
      const files = require.context("../assets/home", true);
      getAssets(files);
      assets.sidebar = { type: null, src: null };
      break;
    }
    case "/books": {
      const files = require.context("../assets/books", true);
      getAssets(files);
      assets.sidebar = { type: "list", src: "items" };
      break;
    }
    case "/contact_me": {
      const files = require.context("../assets/contact_me", true);
      getAssets(files);
      assets.sidebar = { type: null, src: null };
      break;
    }
    case "/games": {
      const files = require.context("../assets/games", true);
      getAssets(files);
      assets.sidebar = { type: "list", src: "images" };
      break;
    }
    case "/movies_tv": {
      const files = require.context("../assets/movies_tv", true);
      getAssets(files);
      assets.sidebar = { type: "list", src: "links" };
      break;
    }
    case "/music": {
      const files = require.context("../assets/music", true);
      getAssets(files);
      assets.sidebar = { type: "list", src: "playlistSrcs" };
      break;
    }
    case "/portfolio": {
      const files = require.context("../assets/portfolio", true);
      getAssets(files);
      assets.sidebar = { type: "lists", src: null };
      break;
    }

    case "header": {
      const files = require.context("../assets/header", true);
      getAssets(files);
      break;
    }

    default: {
      console.log(`Something went wrong! Path: ${path}`);
      assets = { origin: "error", sidebar: { type: null } };
    }
  }
  return assets;
}
