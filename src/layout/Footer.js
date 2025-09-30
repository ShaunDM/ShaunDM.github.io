import Links from "../assets/Links";
import loadMultipleFiles from "../util/loadMultipleFiles";

//renders footer, static throughout all routes.
export default function Footer() {
  const footerAssets = loadMultipleFiles("/contact_me");

  return (
    <footer name="footer" id="footer" className="add-row-border">
      <Links component="footer" assets={footerAssets} />
    </footer>
  );
}
