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

    case "/calendar": {
      break;
    }
    default: {
      return console.log(`Something went wrong! Path: ${path}`);
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

export function formatMonth(month) {
  const months = [
    "january",
    "febuary",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  return months[month];
}

export function getCurrentDate() {
  const year = new Date(Date.now()).getFullYear();
  const month = formatMonth(new Date(Date.now()).getMonth());
  const day = new Date(Date.now()).getDate();
  return { year: year, month: month, day: day };
}
