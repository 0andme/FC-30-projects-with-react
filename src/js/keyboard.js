export class Keyboard {
  #switchEl;
  #fontSelectEl;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }
  #assignElement() {
    this.#switchEl = document.getElementById("switch");
    this.#fontSelectEl = document.getElementById("font");
  }
  #addEvent() {
    this.#switchEl.addEventListener("change", (event) => {
      document.documentElement.setAttribute(
        "theme",
        event.target.checked ? "dark-mode" : ""
      );
      // console.log(event.target.checked);
    });
    this.#fontSelectEl.addEventListener("change", (event) => {
      document.body.style.fontFamily = event.target.value;
      // console.log(event.target.value);
    });
  }
}
