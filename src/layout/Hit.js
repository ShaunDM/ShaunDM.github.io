import { useContext } from "react";
import { PropContext } from "./PropContext";

//Component specifically used to inform dev if an event was fired.
export default function Hit() {
  const { hit } = useContext(PropContext);
  if (hit) return "Hit";
  return "No hit";
}
