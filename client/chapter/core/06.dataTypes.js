/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty); // object
// 2. 값이 할당되지 않은 상태
let undef;
console.log(typeof undef); // undefined
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const number = 10 + 5;
const double = 'hello';
const single = 'hello';
const backtick = `hello ${number}`;
console.log(backtick);
console.log(typeof double); // string
console.log(typeof single); // string
console.log(typeof backtick); // string

const str = new String('hello');

console.log(str); // String{'hello'}
/* -------------------------------------------------------------------------- */
/*               String 생성자 함수를 사용하여 문자열 객체를 만든다.              */
/* -------------------------------------------------------------------------- */

// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 150;
const floatingPointNumber = 10.5;
console.log(typeof integer); // number
console.log(typeof floatingPointNumber); // number
console.log(typeof NaN); // number
console.log(typeof Infinity); // number
console.log(typeof -Infinity); // number

const num = new Number(123);

console.log(num); // Number{123}
// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigInt = 123n;

console.log(typeof bigInt); // bigInt

const b = BigInt(111n);
// 6. 참(true, yes) 또는 거짓(false, no)

const isActive = false;

console.log(typeof isActive); // boolean
// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

console.clear();

const object = {
  name: 'tiger',
};

const obj = new Object({ name: 'heejae' });

console.log(object);
console.log(obj);
console.log(typeof object); // object
console.log(typeof obj); // obejct

// 8. 고유한 식별자(unique identifier)

// 심볼은 생성자 함수로 만드는 방법이 유일합니다.
// Symbol로 할당되는 고유한 값은 메모리 주소값이 다릅니다.
const id = Symbol('uuid');
const id2 = Symbol('uuid');

console.log(typeof id);
console.log(typeof id2);

/* 결국 null이랑 Undefined 제외하고 모든 데이터 타입은 객체고 생성자 방식으로 만들어지지만 편의를 위해 String literal로 사용됩니다 */

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류
console.clear();
// Object

const user = {
  name: 'tiger',
  age: 20,
  sum: function (x, y) {
    return x + y;
  },
  sayHi: function () {
    // 1. normal function
    // prototype을 포함하고 있어서 무거움
    // this 바인딩의 차이 this는 모든 객체가 생성이 될 때 자기참조 변수
    // 이 방식으로 함수를 정의하면 해당 함수의 this는 함수가 호출된 객체를 가리킵니다. 즉, sayHi 함수가 객체의 메서드로 호출될 때, this는 해당 객체를 참조합니다.
    return 'hello';
  },
  sayHi2: () => {
    // 2. arrow function
    // 가벼움
    // prototype을 포함하고 있지않아서 가벼움
    // this 바인딩의 차이
    // 화살표 함수에는 this키워드가 생성되지 않음
    // 화살표 함수는 자신을 감싸는 가장 가까운 함수나 전역 객체를 가리키는 this를 갖습니다. 따라서 객체의 메서드로 사용될 때에도 this는 해당 객체가 아니라 주변 스코프의 this를 가리킵니다.
    return 'hello';
  },
  sayHi3() {
    // 3. concise method
    // 가벼움
    // prototype을 포함하고 있지않아서 가벼움
    /* 3번 방식을 많이 사용하는 이유
       1. 짧게 사용가능
       2. 가볍게 사용가능
    */
    // 함수안에 함수는 arrow function을 자주 사용합니다.
    // 이 경우에도 함수가 객체의 메서드로 호출될 때, this는 호출된 객체를 가리킵니다. 즉, sayHi3 함수가 객체의 메서드로 사용될 때에는 첫 번째 방식과 동일하게 작동합니다.
    const sayBye = () => {
      return 'bye';
    };
    return 'hello';
  },
};

console.log(user);

// Array
const newArray = new Array(1, 2); // 이것도 부모가 객체
console.log(newArray);

const arr = [
  10,
  100,
  1000,
  null,
  undefined,
  'hello',
  { name: 'lee' },
  function plus(x, y) {
    return x + y;
  },
]; // 배열안에는 문자, 숫자, undefined, null,객체, 함수, 배열 모두 가능
console.log(arr);
console.log(arr[7]);

console.clear();
// function
function 붕어빵틀(재료) {
  return `맛있는 ${재료}붕어빵`;
}

const 팥붕 = 붕어빵틀('팥');
const 슈붕 = 붕어빵틀('슈크림');
const 피붕 = 붕어빵틀('피자');

console.log(팥붕);
console.log(슈붕);
console.log(피붕);

// const 붕어빵틀2 = function (재료) {
//   return `맛있는 ${재료}붕어빵`;
// };

// console.log(붕어빵틀2('팥'));
// console.log(붕어빵틀2('슈'));
// console.log(붕어빵틀2('피'));
// this

// object

const globalObject = {
  string: {
    // ...
  },
  number: {
    // ...
  },
  boolean: {
    // ...
  },
  function: {
    // ...
  },
  array: {
    // ...
  },
};

// console.log(globalObject);
