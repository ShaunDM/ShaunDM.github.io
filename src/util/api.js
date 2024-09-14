// Doesn't work, can't use require without a static path
//
//function dynamicImageLoader(folder) {
//   const path = `src/assets/${folder}/carousel`;
//   const images = require.context(path, false, /\.(png|jpe?g|svg)$/);
//   let carousel = {};
//   images.keys().forEach((item, index) => {
//     carousel[item.replace("./", "")] = images(item);
//   });
//   return carousel;
// }

export function getAssets(path) {
  let images = [];
  switch (path) {
    case "/books": {
      const carouselImages = require.context(
        "../assets/books/carousel",
        false,
        /\.(png|jpe?g|svg)$/
      );
      let thumbs = {};
      carouselImages.keys().forEach((item, index) => {
        thumbs[getAssetId(item.replace("./", ""))] = carouselImages(item);
      });

      images.push(thumbs);

      const fullImages = require.context(
        "../assets/books/full",
        false,
        /\.(png|jpe?g|svg)$/
      );
      let full = {};
      fullImages.keys().forEach((item, index) => {
        full[getAssetId(item.replace("./", ""))] = fullImages(item);
      });

      images.push(full);

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
      return console.log("Something went wrong!");
    }
  }
  return images;
}

export function getAssetId(file_name) {
  return file_name.substring(0, file_name.lastIndexOf(".")) || file_name;
}

export function getAssetTitle(file_name) {
  return file_name
    .substring(0, file_name.lastIndexOf("_"))
    .replace(/_/g, " ")
    .replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    )
    .trim();
}

export function getAssetAlt(file_name) {
  return file_name.replace(/_/g, " ");
}

export function referenceAsset(file_name) {
  return {
    id: getAssetId(file_name),
    title: getAssetTitle(file_name),
    alt: getAssetAlt(file_name),
  };
}
