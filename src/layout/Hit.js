import { useContext } from "react";
import { PropContext } from "./PropContext";

export default function Hit() {
  const { hit } = useContext(PropContext);
  if (hit) return "Hit";
  return "No hit";
}
