import Links from "./Links";
import loadMultipleFiles from "../util/loadMultipleFiles";

export default function Footer() {
  const footerAssets = loadMultipleFiles("/contact_me");

  return (
    <footer className="add-row-border">
      <Links component="footer" assets={footerAssets} />
    </footer>
  );
}
