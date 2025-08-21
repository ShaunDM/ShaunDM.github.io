import dotenv from "dotenv";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import links from "../assets/movies_tv/links.json" with { type: "json" };

const ENV_PATH =
  "C:/Users/Shaun/Documents/Github/personal_projects/personal_website/personal_website_frontend/.env";

dotenv.config({
  path: ENV_PATH,
});

const baseURL = process.env.MOVIE_BASE_URL;
const imageBaseURL = process.env.MOVIE_IMAGE_BASE_URL;

async function fetchJson(
  url,
  options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
  },
  onCancel
) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

//this is for the base url of getting images. See https://developer.themoviedb.org/reference/configuration-details
async function checkBaseURL() {
  const requestBaseURL = await fetchJson(baseURL + "configuration").then(
    (response) => response.images.secure_base_url
  );
  if (requestBaseURL.trim() != imageBaseURL.trim()) {
    console.log("ENV variable: MOVIE_IMAGE_BASE_URL, is incorrect, updating");

    const envVars = fs
      .readFileSync(ENV_PATH, "utf8", (err, data) => {
        if (err) throw err;
        return data;
      })
      .split(os.EOL);
    

    fs.writeFile(
      ENV_PATH,
      envVars
        .map((envVar) => {
          if (!envVar.includes("MOVIE_IMAGE")) return envVar;
          return `MOVIE_IMAGE_BASE_URL = "${requestBaseURL}"`;
        })
        .join(os.EOL), 
      (err) => {
        if (err) throw err
        console.log("ENV variable: MOVIE_IMAGE_BASE_URL is updated");
      });
  }
}

async function getMovieTv(id) {
  return fetchJson(
      `https://api.themoviedb.org/3/find/${id}?external_source=imdb_id`
    )
}


await checkBaseURL();


const linkValues = Object.values(links);
const assets = {};

for (const link of linkValues) {
  //fetch asset
  const asset = await getMovieTv(path.basename(link));
  //returns asset as array, finds data and formats it correctly for later use.
  for (const [key, value] of Object.entries(asset)) {
    if (value.length && value[0].title) {
      assets[value[0].title.toLowerCase().replaceAll(" ", "_")] = value[0];
      continue;
    }
    if (value.length) assets[value[0].name.toLowerCase().replaceAll(" ", "_")] = value[0];
  }
}

fs.writeFile(
  "C:/Users/Shaun/Documents/Github/personal_projects/personal_website/personal_website_frontend/src/assets/movies_tv/items.json",
 JSON.stringify(assets),
  (err) => {
    if (err) throw err;
    console.log("src/assets/movies_tv/items.json has been updated");
  });



