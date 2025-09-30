import { checkURL } from "../util/api.mjs";
import { useContext } from "react";
import { PropContext } from "../layout/PropContext";

export default function Home() {
  const { assets } = useContext(PropContext);
  checkURL(assets.origin);

  return (
    <div name="page description" id="page_description">
      <h3 style={{ margin: "0px 0px 1rem 0px", padding: "1rem 0 0 0" }}>
        Hello, thanks for looking at my site.
      </h3>
      <p>
        I've built this site to practice and showcase my abilities in web
        development, while sharing some of the things I enjoy.
      </p>
      <p>I hope you find something to appreciate, have a good one :)</p>
      <p className="blockquote-footer" style={{ padding: "1rem" }}>
        Last update of content was Sept 2025
      </p>
    </div>
  );
}
