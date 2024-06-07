/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
// 화살표 함수안에서는 arguments는 없습니다.
// 그래서 사용하는 방식이 rest 파라미터 (나머지 파라미터)
let calcAllMoney = (...rest) => {
  let total = 0;
  // for (let i = 0; i < rest.length; i++) {
  //   total += rest[i];
  // }
  // for (const price of rest) {
  //   total += price;
  // }
  // for (const price in rest) {
  //   total = rest[price];
  // }
  rest.forEach((v) => (total += v));
  // rest.map((v) => (total += v));
  // return rest.reduce((acc, cur) => acc + cur, 0);
  // rest.filter((v) => v < 5000);
  return total;
};

const result = calcAllMoney(1000, 5000, 4500, 13000);

console.log(result);
// 화살표 함수와 this
// 자바스크릅티의 함수는 양면의 얼굴 => 생성자(constructor)
// 생성자로만 사용하세요
function Button(text) {
  this.content = text;
}

const button1 = new Button('btn');
console.log(button1);

// 일반 함수
// - constructor 내장 (concise method는 예외)
// - this : 나를 호출한 대상을 this
// - 객체의 메서드로 사용이 많이 됨  => this를 찾기 위해

// 화살표 함수
// - constructor 비내장
// - this : 바인딩 하지 않음 -> 상위 컨텍스트에서 찾음

// 정리
// 객체에 메서드를 정의해야한다 => 일반함수 사용..
// 메서드 안에 함수를 작성해야할때  => 화살표 함수 사용..(내 상위 this를 가져오기 때문에)

/* totalGrades <- user의 메서드임. user가 호출
sayHi <- user의 메서드가 아님. totalGrades함수가 window한테 불러달라고 한거 */
const user = {
  name: 'Kim',
  total: 0,
  grades: [30, 60, 80],
  totalGrades: function () {
    // concise 와 this는 동일하게 작동
    // console.log(this);

    // function sayHi() {
    //   console.log(this);
    // }
    // const sayHi2 = () => {
    //   console.log(this);
    // };

    // sayHi();
    // sayHi2();

    // 누구의 호출에 의해서 실행이 된 내용이 아니면
    // this는 window를 가리킵니다.
    this.grades.forEach(function (item) {
      // console.log(this);
    });
    // 화살표 함수는 상위 this 를 가져옵니다.
    this.grades.forEach((item) => {
      this.total += item;
    });

    // 그럼 화살표 함수가 나오기 전에는 어떠한 방식으로 사용을 했는지
    // 내부 함수 뒤에 this객체를 명시적으로 선언합니다.
    this.grades.forEach(function (item) {
      console.log(this);
    }, user);
    return this.total;
  },
};

user.totalGrades();

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// let pow = (numeric, powerCount) => {
//   let result = 1;
//   for (let i = 0; i < powerCount; i++) {
//     result *= numeric;
//   }
//   return result;
// };

const pow = (numeric, powerCount) => {
  // reduce를 사용하기위해 powerCount만큼 빈 배열을 생성하고
  // reduce로 기본 설정 값을 1로 설정하고 acc에 numeric값을 계속 곱한 값을 리턴
  // return Array(powerCount)
  //   .fill(null)
  //   .reduce((acc) => {
  //     return (acc *= numeric);
  //   }, 1);
  // reduce를 사용하기위해 powerCount만큼 numeric(곱하게 될 값)이 들어있는 배열을 생성하고
  // reduce로 기본 설정 값을 1로 설정하고 acc에 cur값을 계속 곱한 값을 리턴
  // return Array(powerCount)
  // .fill(numeric)
  // .reduce((acc,cur) => {
  //   return (acc *= cur);
  // }, 1);

  if (powerCount == 1) {
    return numeric;
  } else {
    return numeric * pow(numeric, powerCount - 1);
  }
};
let num1 = pow(2, 2);
let num2 = pow(2, 4);

// console.log(num1);
// console.log(num2);

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  // let result = '';
  // for (let i = 0; i < repeatCount; i++) {
  //   result += text;
  // }
  // return result;

  // return Array(repeatCount)
  //   .fill(null)
  //   .reduce((arr) => (arr += text), '');

  return Array(repeatCount)
    .fill(text)
    .reduce((arr, cur) => (arr += cur), '');
};

let str1 = repeat('안녕', 2);

console.log(str1);
