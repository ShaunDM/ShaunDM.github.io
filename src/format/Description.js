import { Link } from "react-router-dom";
import { getAssetTitle } from "../util/api.mjs";

export default function Description({ src }) {
  if (!src.description) {
    return src;
  }
  console.log(src);

  const links = Object.entries(src.links).map(([key, value], index) => (
    <>
      <Link key={key} to={value} target="_blank">
        {getAssetTitle(key)}
      </Link>
      {index === Object.keys(src.links).length - 1 ? null : ", "}
    </>
  ));

  return (
    <>
      {src.description}
      {links}
    </>
  );
}
