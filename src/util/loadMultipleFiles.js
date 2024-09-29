/*require.context does not work with .mjs file, however resetCalendar.js 
needs api.mjs to keep that extension. Couldn't figure out how to import multiple files
without require.context.*/

import { getAssetId } from "./api.mjs";
export default function loadMultipleFiles(path) {
  let assets = null;
  const truncatedPath = path.substring(1).includes("/")
    ? path.substring(0, path.substring(1).indexOf("/") + 1)
    : path;
  switch (truncatedPath) {
    case "/books": {
      assets = [];
      const carouselImages = require.context(
        "../assets/books/carousel",
        false,
        /\.(png|jpe?g|svg)$/
      );
      let thumbs = {};
      carouselImages.keys().forEach((item, index) => {
        thumbs[getAssetId(item.replace("./", ""))] = carouselImages(item);
      });

      assets.push(thumbs);

      const fullImages = require.context(
        "../assets/books/full",
        false,
        /\.(png|jpe?g|svg)$/
      );
      let full = {};
      fullImages.keys().forEach((item, index) => {
        full[getAssetId(item.replace("./", ""))] = fullImages(item);
      });

      assets.push(full);

      break;
    }
    case "/games": {
      break;
    }

    case "/movies_tv": {
      break;
    }
    case "/music": {
      break;
    }
    case "/portfolio": {
      break;
    }
    default: {
      return console.error(`Something went wrong! Path: ${path}`);
    }
  }
  return assets;
}
