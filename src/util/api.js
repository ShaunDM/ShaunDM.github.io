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

module.exports = {};
