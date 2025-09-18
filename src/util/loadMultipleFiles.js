/*require.context does not work with .mjs file, however resetCalendar.js 
needs api.mjs to keep that extension. Couldn't figure out how to import multiple files
without require.context.*/

import { getAssetId } from "./api.mjs";

export default function loadMultipleFiles(path) {
  let assets = {};

  const truncatedPath = path.substring(1).includes("/")
    ? path.substring(0, path.substring(1).indexOf("/") + 1)
    : path;

  function getAssets(fetch) {
    fetch.keys().forEach((item) => {
      const newKey = getAssetId(item.replace("./", ""));
      const slash = newKey.indexOf("/");
      if (slash >= 0) {
        assets[newKey.slice(0, slash)] = {
          ...assets[newKey.slice(0, slash)],
          [newKey.slice(slash + 1)]: fetch(item),
        };
      } else {
        assets = { ...assets, [newKey]: fetch(item) };
      }
    });
  }
  switch (truncatedPath) {
    case "/":
    case "/home": {
      const fetch = require.context("../assets/home", true);
      getAssets(fetch);
      assets.sidebar = { type: null, src: null };
      break;
    }
    case "/books": {
      const fetch = require.context("../assets/books", true);
      getAssets(fetch);
      assets.sidebar = { type: "list", src: "items" };
      break;
    }
    case "/contact_me": {
      const fetch = require.context("../assets/contact_me", true);
      getAssets(fetch);
      assets.sidebar = { type: null, src: null };
      break;
    }
    case "/games": {
      const fetch = require.context("../assets/games", true);
      getAssets(fetch);
      assets.sidebar = { type: "list", src: "images" };
      break;
    }
    case "/movies_tv": {
      const fetch = require.context("../assets/movies_tv", true);
      getAssets(fetch);
      assets.sidebar = { type: "list", src: "links" };
      break;
    }
    case "/music": {
      const fetch = require.context("../assets/music", true);
      getAssets(fetch);
      assets.sidebar = { type: "list", src: "playlistSrcs" };
      break;
    }
    case "/portfolio": {
      const fetch = require.context("../assets/portfolio", true);
      getAssets(fetch);
      assets.sidebar = { type: "dropdown", src: null };
      break;
    }

    case "header": {
      const fetch = require.context("../assets/header", true);
      getAssets(fetch);
      break;
    }

    default: {
      console.log(`Something went wrong! Path: ${path}`);
      assets = { origin: "error", sidebar: { type: null } };
    }
  }
  return assets;
}
