/* --------- */
/* Object    */
/* --------- */

/* global isObject */

const html = /* html */ `
  <h1>title</h1>
  <div class="first">hello</div>
`;

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /*css*/ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'user-id-zxk!@kadfkq',
  name: 'tiger',
  email: 'seonbeom2@gmail.com',
  isSignIn: false,
  permission: 'paid',
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn); // getter
console.log((authUser.permission = 'free')); // setter

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log(authUser['uid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']); // getter
console.log((authUser['permission'] = 'allPass')); // setter

console.clear();

Object.prototype.nickName = '호랑이';

console.log('uid' in authUser); // true

for (let key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    console.log(key);
    console.log(authUser[key]);
  }
}

console.clear();

// 객체의 key 만을 모아서 배열을 반환하는 메서드 Object.keys()
const keyList = Object.keys(authUser);
console.log(keyList);

// 객체의 value 만을 모아서 배열을 반환하는 메서드 Object.values()
const valueList = Object.values(authUser);
console.log(valueList);

// 객체의 key:value를 쌍으로 배열로 반환하는 메서드 Object.entries()
const entries = Object.entries(authUser);
console.log(entries);

function getPropertiesList(obj) {
  let result = [];
  for (let key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      result.push([`${key} : ${obj[key]}`]);
    }
  }
  return result;
}

// 객체 안에 키가 있는지 확인 방법
// in문

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function createUser(name, age, phone) {
  return {
    name: name,
    age: age,
    [calculateProperty]: phone,
  };
}

createUser('희재', 30, '010-1234-5678');

// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

// 프로퍼티 제거 or 삭제
//        비워두기 메모리 날림

function removeProperty(obj, key) {
  if (isObject(obj)) {
    obj[key] = null;
  }
}
removeProperty(authUser, 'name'); // authUser.name = null;

function deleteProperty(obj, key) {
  if (isObject(obj)) {
    delete obj[key];
  }
}
deleteProperty(authUser, 'name'); // undefined

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
};

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

isEmptyObject({});
/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

// 순서를 바꿀 수 없음. 변수명은 자유작명 가능

const arr = [10, 100, 1000, 10_000];

// const [a0,a1,a2,a3] = arr;

// console.log(a0); // 10;
// console.log(a1); // 100;
// console.log(a2); // 1000;
// console.log(a3); // 10000;

// const [a0, ...rest] = arr;

// console.log(rest); // [100,1000,10000]

console.clear();

for (let [key, value] of Object.entries(authUser)) {
  console.log(key);
  console.log(value);
}

const [first, second] = document.querySelectorAll('span');

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

// 순서를 고려하지 않음.
/* 기본적으로 key와 변수명이 일치해야 하지만 변수명을 변경하고 싶을 때는
  key:변수명 으로 변경이 가능합니다.
*/
const salaries = {
  함정민: 95,
  지유진: 110,
  이진용: 15,
  한상학: 300,
};

const { 함정민: 함, 지유진: 지, 이진용, 한상학, 장주원: 장 = 500 } = salaries;

console.log(함);
console.log(지);
console.log(이진용);
console.log(한상학);
console.log(장);

console.clear();

function createUserObject({
  name: n,
  age: a,
  gender: g,
  job: j = '홈프로텍터',
  ...rest
}) {
  const { address, tel } = rest;
  return {
    name: n,
    age: a,
    gender: g,
    job: j,
    address,
    tel,
  };
}

const data = {
  name: 'beom',
  age: 40,
  gender: 'male',
  job: '개발자',
  address: '서울시 중랑구',
  tel: '010-123...',
};

const data1 = { ...data };
const data2 = { ...data };

data1.age = 20;

console.log(data1);
console.log(data2);

const num = 10;

let num1 = num;
let num2 = num;

num1 = 20;

console.log(num1);
console.log(num2);

const person = createUserObject(data);

// console.log(person);
