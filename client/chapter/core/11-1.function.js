/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

function getRandom() {
  return Math.random() > 0.5 ? 1 : 0;
}

// 함수 선언
// defalut parameter
//           매개변수 / parameter / 인자
function calcPrice(priceA, priceB, priceC = getRandom(), priceD = getRandom()) {
  // 이런 확인하는 작업을 밸리데이션 이라함
  // if (priceC === undefined) priceC = 0;
  // if (!priceC) priceC = 0;
  // priceC = priceC || 0;

  // priceC = priceC ?? 0;
  // priceC ??= 0;

  return priceA + priceB + priceC + priceD;
}

//                   인수 argument

const res = calcPrice(1000, 3000);
console.log(res);

// 좋은 함수 작성 여건

// 1. 함수의 이름을 잘 지어야 한다.(동사) / 가독성이 좋다
// 2. 하나의 기능만을 수행해야 한다.
// 3. 전역의 오염을 막는다.
// 4. 재사용성이 좋아야 한다

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
let rem = function (pxValue, base = 16) {
  if (typeof pxValue === 'string') {
    pxValue = parseFloat(pxValue, 10);
  }
  if (typeof base === 'string') {
    base = parseFloat(base, 10);
  }
  if (!pxValue) {
    throw new Error('rem 함수의 첫번째 인수는 필수 입력 값 입니다.');
  }
  return pxValue / base + 'rem';
};

// Test Driven Development 쉽게말해 함수 테스트 보는 과정
// assert는 주장하다
console.assert(rem(20) === '1.25rem');
console.assert(rem('25px') === '1.5625rem');
console.assert(rem('30px', 10) === '3rem');

// setter 함수
function setStyle(node, prop, value) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }
  if (typeof prop !== 'string') {
    throw new Error('두번째 인수는 string을 입력해야 합니다.');
  }
  if (!value) {
    throw new Error('세번째 인수는 필수입니다.');
  }
  node.style[prop] = value;
}

// 셋팅을 하는 함수들은 return을 사용해야할 필요가없음

const first = document.querySelector('.first');

// setStyle(first, 'color', 'red');

// node의 값을 'h1'으로 받았을 경우

// getter 함수

function getStyle(node, value) {
  if (typeof node === 'string') {
    // if (node[0] !== '.' && node[0] !== '#') {
    //   throw new Error(
    //     '첫번째 인수의 값을 문자로 작성할시 . 와 #을 입력해야 합니다.'
    //   );
    // }
    node = document.querySelector(node);
  }
  if (typeof value !== 'string') {
    throw new Error('getStyle 함수의 두번째 인수는 문자 타입 이어야합니다.');
  }

  return getComputedStyle(node)[value];
}
getStyle('#first', 'fontSize');

function css(node, prop, value) {
  // if (!value) {
  //   return console.log(getStyle(node, prop));
  // } else {
  //   setStyle(node, prop, value);
  // }

  return !value ? getStyle(node, prop) : setStyle(node, prop, value);
}

console.log(css('.first', 'color', 'red')); // setter 함수
console.log(css('.first', 'color')); // getter 함수

// node가 없거나 document.ELEMENT_NODE가 아닐 경우
// prop의 값이 string이 아닐 경우
// prop의 값이 style 속성이 아닐 경우
// value의 값이 number가 아닌 경우
// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
