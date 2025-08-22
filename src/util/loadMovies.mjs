import dotenv from "dotenv";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import links from "../assets/movies_tv/links.json" with { type: "json" };

const ENV_PATH = (import.meta.url + '../../../../.env').substring(8);

dotenv.config({
  path: ENV_PATH
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

//this is checks the base url of getting images and replaces if necessary. See https://developer.themoviedb.org/reference/configuration-details
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
  for (const value of Object.values(asset)) {
    if (value.length && value[0].title) {
      assets[value[0].title.toLowerCase().replaceAll(" ", "_")] = value[0];
      continue;
    }
    if (value.length) {
      assets[value[0].name.toLowerCase().replaceAll(" ", "_")] = value[0];
    }
  }
}

//TMDB API genres have two separate categories and id sets depending on whether the media type is a tv show or a movie for some reason.
const genreListMovies = await fetchJson("https://api.themoviedb.org/3/genre/movie/list").then((response) => response.genres);
const genreListTV = await fetchJson("https://api.themoviedb.org/3/genre/tv/list").then((response) => response.genres);

//converts given genres ids into genre names.
for (const value of Object.values(assets)) {
  if (value.media_type === "tv") {
    value["genres"] = value.genre_ids.map((id) => {
      const object = genreListTV.find((obj) => obj.id === id);
      return object.name;
    })
  }
  else {
    value["genres"] = value.genre_ids.map((id) => {
      const object = genreListTV.find((obj) => obj.id === id);
      return object.name;
    })
  }
  delete value.genre_ids;

  //tv shows have a "name" key instead of "title" key that movies have. Replaces "name" portion of key to "title" for consistency purposes when pulling data to render.
  if (value.title) {
    continue;
  }
  for (const [key, prop] of Object.entries(value)) {
    if (key.includes("name")) {
      value[key.replace("name", "title")] = value[key];
      delete value[key];
    }
  }
}

fs.writeFile(
  "C:/Users/Shaun/Documents/Github/personal_projects/personal_website/personal_website_frontend/src/assets/movies_tv/items.json",
 JSON.stringify(assets),
  (err) => {
    if (err) throw err;
    console.log("src/assets/movies_tv/items.json has been updated");
  });



