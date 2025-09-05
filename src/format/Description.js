import { getAssetTitle } from "../util/api.mjs";

export default function Description({ src }) {
  if (!src.description) {
    return src;
  }

  const links = Object.entries(src.links).map(([key, value], index) => (
    <>
      <a key={key} href={value} target="_blank">
        {getAssetTitle(key)}
      </a>
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
