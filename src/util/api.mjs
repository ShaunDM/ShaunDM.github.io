export function getAssets(path) {
  let assets = null;
  const truncatedPath = path.substring(1).includes("/")
    ? path.substring(0, path.substring(1).indexOf("/") + 1)
    : path;
  switch (truncatedPath) {
    case "/": {
      break;
    }
    case "/books": {
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
      assets = import("../assets/calendar/calendar_db.json");
      break;
    }
    case "/contact_me": {
      break;
    }
    default: {
      return console.error(`Something went wrong! Path: ${path}`);
    }
  }
  return assets;
}

export function getAssetId(file_name) {
  return file_name.substring(0, file_name.lastIndexOf(".")) || file_name;
}

export function getAssetTitle(file_name) {
  return file_name
    .replace(/_/g, " ")
    .replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    )
    .replace(" Slash ", "/")
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

export const months = [
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

export function formatMonth(month) {
  return months[month];
}

export function getCurrentDate() {
  const year = new Date(Date.now()).getFullYear();
  const month = formatMonth(new Date(Date.now()).getMonth());
  const day = new Date(Date.now()).getDate();
  return { year: year, month: month, day: day };
}

export function convertMonthToTitleCase(month) {
  month = month.toLowerCase();
  return month[0].toUpperCase() + month.substring(1);
}

export function convertSentenceToId(sentence) {
  return sentence.replaceAll(" ", "_").toLowerCase();
}

export function convertPathToTitle(path) {
  let title = path.substring(1);
  return title
    .replace(/_/g, " ")
    .replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    )
    .replace(" Slash ", "/")
    .trim();
}
