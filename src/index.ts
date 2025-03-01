import { cardName } from "helpers";
import FloorsCard from "./card";
import FloorsCardEditor from "./editor";

declare global {
  interface Window {
    customCards: Array<Object>;
  }
  interface HTMLElementTagNameMap {
    'floors-card': FloorsCard;
    'floors-card-dev': FloorsCard;
  }
}

customElements.define(cardName, FloorsCard);
customElements.define(
  `${cardName}-editor`,
  FloorsCardEditor
);

window.customCards = window.customCards || [];
window.customCards.push({
  type: cardName,
  name: "toggle card with TypeScript",
  description: "Turn an entity on and off",
});
