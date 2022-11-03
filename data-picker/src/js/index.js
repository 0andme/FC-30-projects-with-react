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
    this.assignElement();
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
    this.nextBtnEl = this.calenderMonthEl.querySelector("#nexy");
    this.prevBtnEl = this.calenderMonthEl.querySelector("#prev");
    this.calenderDatesEl = this.calenderEl.querySelector("#dates");
  }
  // func | 요소와 이벤트 연결
  addEvent() {
    // input 클릭시  달력 활성화
    this.dateInputEl.addEventListener("click", this.toggleCalenter.bind(this));
  }

  //  func | input 클릭시  캘린더 on/off
  toggleCalenter() {
    this.calenderEl.classList.toggle("active");
  }
}

new DataPicker();
