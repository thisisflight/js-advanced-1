import { FavoritesView } from "./views/favorites/favorite.js";
import { MainView } from "./views/main/main.js";

class App {
  // urlpatterns: path + привязка view
  routes = [
    { path: "", view: MainView },
    { path: "#favorites", view: FavoritesView },
  ];
  appState = {
    favorites: [],
  };

  constructor() {
    // отслеживание изменения хэша
    // bind так как контекст у route() каждый раз разный
    window.addEventListener("hashchange", this.route.bind(this));
    this.route();
  }

  route() {
    // сносим все event listener и прочие
    if (this.currentView) {
      this.currentView.destroy();
    }

    // найдем нашу view по соответствию пути в рутах и хэшу в объекте location в браузере
    const view = this.routes.find((r) => r.path === location.hash).view;
    // передача во вью глобального состояния
    this.currentView = new view(this.appState);
    this.currentView.render();
  }
}

new App();
