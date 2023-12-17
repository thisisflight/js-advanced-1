export class AbstractView {
  // абстракция для вью
  // реализация основных методов
  constructor() {
    this.app = document.getElementById("root");
  }
  setTitle(title) {
    document.title = title;
  }

  render() {
    return;
  }

  destroy() {
    return;
  }
}
