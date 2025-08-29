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

export function getAssetId(assetName) {
  return assetName.substring(0, assetName.lastIndexOf(".")) || assetName;
}

const lowercaseInTitle = [
  " Vs ",
  " Of ",
  " A ",
  " And ",
  " For ",
  " The ",
  " But ",
  " An ",
  " With ",
  " To ",
  " X ",
];

function fixLowercase(str) {
  let newStr = str;
  for (let i = 0; i < lowercaseInTitle.length; i++) {
    if (str.includes(lowercaseInTitle[i])) {
      newStr = newStr.replaceAll(
        lowercaseInTitle[i],
        lowercaseInTitle[i].toLowerCase()
      );
    }
  }
  return newStr;
}

export function getAssetTitle(assetName) {
  if (assetName === "rpg") return assetName.toUpperCase();
  if (assetName === "movies_tv") return "Movies/TV";
  let string = assetName
    .replace(/_/g, " ")
    .replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    )
    .replaceAll(" Slash ", "/")
    .replaceAll(
      /[^a-zA-Z0-9_']\S*/g,
      (text) =>
        text.charAt(0) +
        text.charAt(1).toUpperCase() +
        text.substring(2).toLowerCase()
    )
    .replace(/Odk/, "ODK")
    .replace(/Cpe/, "CPE")
    .replace(/Oif/, "OIF")
    .replace(/Linkedin/, "LinkedIn");
  string = fixLowercase(string).replaceAll(": the ", ": The ").trim();
  return string;
}

export function getAssetAlt(assetName) {
  return assetName.replace(/_/g, " ");
}

export function referenceAsset(assetName) {
  return {
    id: getAssetId(assetName),
    title: getAssetTitle(assetName),
    alt: getAssetAlt(assetName),
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
  return getAssetTitle(path.substring(1));
}
