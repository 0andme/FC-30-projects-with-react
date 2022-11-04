class DataPicker {
  monthData = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  //  변수 | 현재 달력에 표시할 날짜에 대한 정보를 저장
  #calenderDate = {
    data: "", // new Date()사용하여 update
    date: 0,
    month: 0,
    year: 0,
  };
  // 변수 | 사용자가 선택한 날짜에 대한 정보 저장
  selectedDate = {
    data: "",
    date: 0,
    month: 0,
    year: 0,
  };

  // 변수 | 있어도 되고 없어도 되는 변수들(가독성을 위해 추가)
  datePickerEl;
  dateInputEl;
  calenderEl;
  calenderMonthEl;
  monthContentEl;
  nextBtnEl;
  prevBtnEl;
  calenderDatesEl;

  constructor() {
    this.initCalendarDate();
    this.assignElement();
    this.initSelectedDate();
    this.setDateInput();
    this.addEvent();
  }

  // func | 변수 초기화 함수
  initCalendarDate() {
    const data = new Date(); // Date 객체 호출
    const date = data.getDate();
    const month = data.getMonth();
    const year = data.getFullYear();
    this.#calenderDate = {
      data,
      date,
      month,
      year,
    };
  }
  // func | html요소 가져오기
  assignElement() {
    this.datePickerEl = document.getElementById("date-picker");
    this.dateInputEl = this.datePickerEl.querySelector("#date-input");
    this.calenderEl = this.datePickerEl.querySelector("#calendar");
    this.calenderMonthEl = this.calenderEl.querySelector("#month");
    this.monthContentEl = this.calenderMonthEl.querySelector("#content");
    this.nextBtnEl = this.calenderMonthEl.querySelector("#next");
    this.prevBtnEl = this.calenderMonthEl.querySelector("#prev");
    this.calenderDatesEl = this.calenderEl.querySelector("#dates");
  }
  // func | selectedDate 초기화
  initSelectedDate() {
    this.selectedDate = { ...this.#calenderDate };
  }
  //  func |  Input 요소 초기화
  setDateInput() {
    this.dateInputEl.textContent = this.formatDate(this.selectedDate.data);
    this.dateInputEl.dataset.value = this.selectedDate.data;
  }
  // func | 요소와 이벤트 연결
  addEvent() {
    // input 클릭시  달력 활성화
    this.dateInputEl.addEventListener("click", this.toggleCalenter.bind(this));
    this.nextBtnEl.addEventListener("click", this.moveToNextMonth.bind(this));
    this.prevBtnEl.addEventListener("click", this.moveToPrevMonth.bind(this));
    this.calenderDatesEl.addEventListener(
      "click",
      this.onClickSelectDate.bind(this)
    );
  }

  //  func | input 클릭시  캘린더 on/off
  toggleCalenter() {
    this.calenderEl.classList.toggle("active");
    this.updateMonth();
    this.updateDates();
  }
  // func | 캘린더의 월/달 변경
  updateMonth() {
    this.monthContentEl.textContent = `${this.#calenderDate.year + 1} ${
      this.monthData[this.#calenderDate.month]
    }`;
  }
  // func | 캘린더의 날짜들 변경
  updateDates() {
    this.calenderDatesEl.innerHTML = "";
    // 해당 년월에 총 몇일이 있는지 구함
    const numberOfDates = new Date(
      this.#calenderDate.year,
      this.#calenderDate.month + 1,
      0
    ).getDate();

    const fragement = new DocumentFragment();
    for (let i = 0; i < numberOfDates; i++) {
      const dateEl = document.createElement("div");
      dateEl.classList.add("date");
      dateEl.textContent = i + 1;
      dateEl.dataset.date = i + 1;
      fragement.appendChild(dateEl);
    }
    // 1월이 몇 요일에 시작하는지 설정
    // grid-column-start 속성 사용
    // new Date(년,월,일).getDay() :  (0~6)사이의 값
    fragement.firstChild.style.gridColumnStart =
      new Date(this.#calenderDate.year, this.#calenderDate.month, 1).getDay() +
      1;

    this.calenderDatesEl.appendChild(fragement);
    this.colorSaturday();
    this.colorSunday();
    this.markToday();
    this.markSelectedDate();
  }
  // func | 날짜 선택 이후 캘린더 off-> 다시 오픈 시 선택 날짜 유지
  markSelectedDate() {
    if (
      this.selectedDate.year === this.#calenderDate.year &&
      this.selectedDate.month === this.#calenderDate.month
    ) {
      this.calenderDatesEl
        .querySelector(`[data-date='${this.selectedDate.date}']`)
        .classList.add("selected");
    }
  }
  // func | 토요일에 해당되는 날짜의 text 색상 변경
  colorSaturday() {
    const saturdayEls = this.calenderDatesEl.querySelectorAll(
      `.date:nth-child(7n+${
        7 -
        new Date(this.#calenderDate.year, this.#calenderDate.month, 1).getDay()
      })`
    );

    for (let i = 0; i < saturdayEls.length; i++) {
      saturdayEls[i].style.color = "blue";
    }
  }
  // func | 일요일에 해당되는 날짜의 text 색상 변경
  colorSunday() {
    const sundayEls = this.calenderDatesEl.querySelectorAll(
      `.date:nth-child(7n+${
        (8 -
          new Date(
            this.#calenderDate.year,
            this.#calenderDate.month,
            1
          ).getDay()) %
        7
      })`
    );

    for (let i = 0; i < sundayEls.length; i++) {
      sundayEls[i].style.color = "red";
    }
  }
  // func | 오늘 날짜에 마크하기
  markToday() {
    const currentDate = new Date();
    const cuerrentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const today = currentDate.getDate();

    if (
      currentYear == this.#calenderDate.year &&
      cuerrentMonth == this.#calenderDate.month
    ) {
      this.calenderDatesEl
        .querySelector(`[data-date='${today}']`)
        .classList.add("today");
    }
  }
  // func | 달 변경
  moveToNextMonth() {
    this.#calenderDate.month++;
    if (this.#calenderDate.month > 11) {
      this.#calenderDate.month = 0;
      this.#calenderDate.year++;
    }
    this.updateMonth();
    this.updateDates();
  }
  moveToPrevMonth() {
    this.#calenderDate.month--;
    if (this.#calenderDate.month < 0) {
      this.#calenderDate.month = 11;
      this.#calenderDate.year--;
    }
    this.updateMonth();
    this.updateDates();
  }
  // func | 각각의 date 클릭시 inPut의 text를 변경
  onClickSelectDate(e) {
    const eventTarget = e.target;
    if (eventTarget.dataset.date) {
      this.calenderDatesEl
        .querySelector(".selected")
        ?.classList.remove("selected");
      eventTarget.classList.add("selected");
      this.selectedDate = {
        data: new Date(
          this.#calenderDate.year,
          this.#calenderDate.month,
          eventTarget.dataset.date
        ),
        year: this.#calenderDate.year,
        month: this.#calenderDate.month,
        date: eventTarget.dataset.date,
      };
      this.setDateInput();
      this.calenderEl.classList.remove("active");
    }
  }

  // func | 날짜정보를 특정 포맷의 문자열로 리턴
  formatDate(dateData) {
    let date = dateData.getDate();
    let month = dateData.getMonth() + 1;
    let year = dateData.getFullYear();

    if (date < 10) {
      date = `0${date}`;
    }
    if (month < 10) {
      month = `0${month}`;
    }
    return `${year}/${month}/${date}`;
  }
}

new DataPicker();
