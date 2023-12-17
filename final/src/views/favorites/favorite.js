import onChange from "on-change";
import { Header } from "../../components/header/header.js";
import { AbstractView } from "../../common/view.js";
import { CardList } from "../../components/card-list/card-list.js";

export class FavoritesView extends AbstractView {
  constructor(appState) {
    super();
    // передача во вью глобального состояния
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.setTitle("Мои книги");
  }

  destroy() {
    onChange.unsubscribe(this.appState);
  }

  async loadList(q, offset) {
    // загрузка списка книг по запросу в форме ввода
    const res = await fetch(
      `https://openlibrary.org/search.json?q=${q}&offset=${offset}`
    );
    return res.json();
  }

  appStateHook(path) {
    if (path === "favorites") {
      this.render();
    }
  }

  render() {
    const main = document.createElement("div");
    main.innerHTML = `
      <h1>Избранное</h1>
    `;
    main.append(
      new CardList(this.appState, { list: this.appState.favorites }).render()
    );
    this.app.innerHTML = "";
    this.renderHeader();
    this.app.append(main);
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}
