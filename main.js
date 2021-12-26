//1. 박스 2개 만들기
//2. dropdown 리스트 만들기
//3. 환율 정보 들고 오기
//3. dropdown 리스트에서 아이템 선택, 아이템 바뀜
//4. 금액 입력 ==> 환전
//5.

let currencyRatio = {
  USD: {
    KRW: 1191.8,
    USD: 1,
    EUR: 0.89,
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00084,
    EUR: 0.89,
    unit: "원",
  },
  EUR: {
    EUR: 1,
    USD: 1.13,
    KRW: 1344.7,
    unit: "유로",
  },
};
let fromCurrency = "USD";
let toCurrency = "USD";

document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    // 1. 버튼을 가져온다
    document.getElementById("from-button").textContent = this.textContent;
    // 2. 버튼의 값을 바꾼다
    // 3. 선택된 currency값을 변수에 저장
    fromCurrency = this.textContent; // 태그.textContent ==> 태그 내부의 문자열 가져옴
    console.log("fromCurrency는", fromCurrency);
  })
);

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    // 1. 버튼을 가져온다
    document.getElementById("to-button").textContent = this.textContent;
    // 2. 버튼의 값을 바꾼다
    // 3. 선택된 currency값을 변수에 저장
    toCurrency = this.textContent;
    console.log("toCurrency는", toCurrency);
  })
);
