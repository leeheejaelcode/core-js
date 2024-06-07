/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (a, b, c, d, e, f) {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사배열이라 불리는 변수
  let total = 0;

  // for 문
  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }

  // for..of 문
  // for (const num of arguments) {
  //   total += num;
  // }

  // forEach 문
  // const arr = [...arguments];
  // const arr = Array.from(arguments);
  // const arr = Array.prototype.slice.call(arguments);
  // arr.forEach(function (price) {
  //   total += price;
  // });

  // reduce
  // return arr.reduce((acc, cur) => {
  //   return acc + cur;
  // }, 0);
  // 마지막에 ,0 부분은 기본 값

  // 빌려쓰기
  // Array.prototype.forEach.call(arguments,function(item){
  //   total += item;
  // })

  // 태생을 배열로 바꾸기
  // 태생을 배열로 바꾸기 때문에 Array의 메서드 사용가능
  // arguments.__proto__ = Array.prototype;
  console.log(arguments);
  console.log(Object.getOwnPropertyDescriptors(arguments));
  return total;
};

const result = calculateTotal(5, 2, 3);

console.log(result);

// forEach => 배열 순환 값 반환 x
// reduce => 배열 순환 값 반환 o 숫자/문자/배열/객체
// map => 배열 순환 값 반환 o only 배열
// filter => 배열 순환 값 반환 o only 배열

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let cb = function (isActive, success, fail) {
  if (isActive) {
    success();
  } else {
    fail();
  }
};

cb(
  false,
  function () {
    return console.log('성공');
  },
  function () {
    return console.log('실패');
  }
);

console.log(true);

function movePage(url, success, fail) {
  if (url === 'https://www.naver.com') {
    success(url);
  } else {
    fail(url);
  }
}

movePage(
  'https://www.naver.com',
  function (url) {
    console.log(`현재 입력하신 url은 ${url} 입니다. 해당 사이트로 이동합니다.`);
    // location.href = url
  },
  function (url) {
    return console.log(`현재 입력하신 url은 ${url}입니다. 제대로 입력해주세용`);
  }
);
// higher-order function 고차함수

function map(arr, func) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(func(arr[i]));
  }
  return res;
}

map([1, 2, 3], (item) => item + 5);

// 고차함수는 함수를 인수로 받아 처리함
// 함수를 리턴함

function greater(n) {
  return function (m) {
    return n > m;
  };
}

const g = (n) => (m) => n > m;

console.log(greater(5)(10)); // false
console.log(greater(5)(1)); // true
console.log(g(5)(10)); // fals
console.log(g(5)(1)); // true

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
// let IIFE = (function () {
//   return console.log('와우');
// })();

// ()(
//   function () {
//     var a = 10;
//     console.log('안녕');
//   }
// )();

// var는 블록 스코프 : x
// var는 함수 스코프 : x

// encapsulation (캡슐화)
// 모듈 프로그래밍 => (import, export)

const MASTER = (function (tiger) {
  let uuid = 'azxcqwASFqjKJ112314!23';

  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };
})(window);

// return된 함수들은 master의 메서드로 들어갑니다.
