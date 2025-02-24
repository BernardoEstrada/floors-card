import FloorsCard from "./card";
import FloorsCardEditor from "./editor";

declare global {
  interface Window {
    customCards: Array<Object>;
  }
}

customElements.define("floors-card", FloorsCard);
customElements.define(
  "floors-card-editor",
  FloorsCardEditor
);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "floors-card",
  name: "toggle card with TypeScript",
  description: "Turn an entity on and off",
});
