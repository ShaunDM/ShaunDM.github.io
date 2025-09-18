export default function NoMatch() {
  throw new Error("Page not found", { cause: "404" });
}
