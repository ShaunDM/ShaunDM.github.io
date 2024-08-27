import { Link } from "react-router-dom";

export default function Sidebar({ carousel }) {
  let sidebarContent = [];
  for (const [key] of Object.entries(carousel)) {
    const img_title = key
      .substring(0, key.lastIndexOf("_"))
      .replace(/_/g, " ")
      .replace(
        /\w\S*/g,
        (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
      )
      .trim();

    const id = key.substring(0, key.lastIndexOf(".")) || key;

    <li id={id}>{/* fix <Link to="">{img_title}</Link>*/}</li>;
  }

  return <aside></aside>;
}
