import { DivComponent } from "../../common/div-component.js";
import { Card } from "../card/card.js";
import "./card-list.css";

export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super();
    this.appState = appState;
    this.parentState = parentState;
  }

  render() {
    if (this.parentState.loading) {
      this.el.innerHTML = `
      <div class="card-list__loader">Загрузка...</div>
      `;
      return this.el;
    }
    const cardGrid = document.createElement("div");
    cardGrid.classList.add("card-grid");
    for (const card of this.parentState.list) {
      cardGrid.append(new Card(this.appState, card).render());
    }
    this.el.append(cardGrid);
    return this.el;
  }
}
