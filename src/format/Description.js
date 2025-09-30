import { Link } from "react-router-dom";
import { getAssetTitle } from "../util/api.mjs";

export default function Description({ src }) {
  if (!src.description) {
    return src;
  }

  const links = Object.entries(src.links).map(([key, value], index) => (
    <object key={key} name={`link to ${key}`} id={`link_${key}`}>
      <Link to={value} target="_blank">
        {getAssetTitle(key)}
      </Link>
      {index === Object.values(src.links).length - 1 ? null : ", "}
    </object>
  ));

  //links are a nested <a> element within an <a> element. Possible work arounds https://stackoverflow.com/questions/9882916/are-you-allowed-to-nest-a-link-inside-of-a-link
  return (
    <>
      {src.description}
      {links}
    </>
  );
}
