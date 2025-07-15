import React from "react";

export default function SpotifyPlayer({ src }) {
  return (
    <iframe
      src={`https://open.spotify.com/embed/playlist/${src}?utm_source=generator`}
      width="100%"
      height="352"
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}
