import { DivComponent } from "../../common/div-component.js";
import "./header.css";

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.el.classList.add("header");
    this.el.innerHTML = `
      <div><img src="/static/img/logo.svg " alt="Логотип" /></div>
      <div class="menu">
        <a href="#" class="menu__item">
          <img src="./static/img/search.svg" alt="Иконка поиска" />
          Поиск книг
        </a>
        <a href="#favorites" class="menu__item">
          <img src="./static/img/favorites-black.svg" alt="Иконка избранного" />
          Избранное
        </a>
        <div class="menu__counter">${this.appState.favorites.length}</div>
      </div>
    `;
    return this.el;
  }
}
