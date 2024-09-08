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
        thumbs[item.replace("./", "")] = carouselImages(item);
      });

      images.push(thumbs);

      const fullImages = require.context(
        "../assets/books/full",
        false,
        /\.(png|jpe?g|svg)$/
      );
      let full = {};
      fullImages.keys().forEach((item, index) => {
        full[item.replace("./", "")] = fullImages(item);
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
