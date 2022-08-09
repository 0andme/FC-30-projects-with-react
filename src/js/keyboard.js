export class Keyboard {
  #switchEl;
  #fontSelectEl;
  #containerEl;
  #keyboardEl;
  #inputGroupEl;
  #inputEl;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }
  #assignElement() {
    this.#containerEl = document.getElementById("container");
    this.#switchEl = this.#containerEl.querySelector("#switch");
    this.#fontSelectEl = this.#containerEl.querySelector("#font");
    this.#keyboardEl = this.#containerEl.querySelector("#keyboard");
    this.#inputGroupEl = this.#containerEl.querySelector("#input-group");
    this.#inputEl = this.#inputGroupEl.querySelector("#input");
  }
  #addEvent() {
    this.#switchEl.addEventListener("change", this.#onChangeTheme);
    this.#fontSelectEl.addEventListener("change", this.#onChangeFont);
    // 키 입력 핸들러
    document.addEventListener("keydown", this.#onKeyUp.bind(this));
    document.addEventListener("keyup", this.#onKeyDown.bind(this));
    //  입력된 한글을 빈 스트링으로 변경
    this.#inputEl.addEventListener("input", this.#onInput);
  }
  // 테마 변경 핸들러
  #onChangeTheme(event) {
    document.documentElement.setAttribute(
      "theme",
      event.target.checked ? "dark-mode" : ""
    );
  }
  // 폰트 변경 핸들러
  #onChangeFont(event) {
    document.body.style.fontFamily = event.target.value;
  }
  // 키보드 입력 핸들러
  #onKeyUp(event) {
    this.#keyboardEl
      .querySelector(`[data-code=${event.code}]`)
      ?.classList.add("active");
    // 한글 입력 제어
    this.#inputGroupEl.classList.toggle(
      "error",
      /[ㄱ-ㅎ|ㅏ-ㅣㅣ가-힣]/.test(event.key)
    );
  }
  #onKeyDown(event) {
    this.#keyboardEl
      .querySelector(`[data-code=${event.code}]`)
      ?.classList.remove("active");
  }
  #onInput(event) {
    event.target.value = event.target.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣㅣ가-힣]/, "");
  }
}
