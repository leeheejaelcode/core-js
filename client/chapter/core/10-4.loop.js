/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  // hasOwnProperty() {
  //   return '난 뭘까?';
  // },
};

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

console.log('creator' in javaScript);
// in문의 특징은 부모가 가진 값도 true을 반환합니다.

Object.prototype.nickName = '호랑이';
// 원본을 훼손하게되면 모든 자식들은 상속이됩니다.

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// hasOwnProperty
console.log(javaScript.hasOwnProperty('nickName'));
console.log(javaScript.hasOwnProperty('toString'));
console.log(javaScript.hasOwnProperty('creator'));

// 메서드 빌려쓰기
// console.log(Object.prototype.hasOwnProperty.call(javaScript, 'nickName'));

// false가 나오는 이유는 call로 첫번째 매개변수에(javaScript)안에 두번째 매개변수(nickName)가 있는지 확인합니다.

// 여기서 call앞에 오는 Object.prototype.hasOwnProperty의 능력을 빌려서 첫번째 매개변수에(javaScript)안에 두번째 매개변수(nickName)가 있는지 확인합니다.

// Object.prototype을 줄여쓰는법 ({}),{} 으로 써도 됩니다.

// call은 hasOwnProperty함수의 메서드
// 첫번째 매개변수는 누가 빌려쓰는건지
// 뒤에 매개변수는 무엇을 빌려쓰는건지

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

// enumerable : 열거 가능한
// writable : 변경 가능한
// configurable : 설정 가능한

// obj.nickName = 'tiger';

// Object.defineProperty(obj,'age',{
//   value:30,
//   enumerable: true,
//   writable: false,
//   configurable:true
// })

const obj = {};

Object.defineProperties(obj, {
  age: {
    value: 30,
    enumerable: true,
  },
  name: {
    value: 'kim',
    enumerable: false,
  },
});

for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    console.log(key);
  }
}

/* -------------------------------------------------------------------------- */
/*                                for in 객체 접근                                */
/* -------------------------------------------------------------------------- */
for (let key in javaScript) {
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    // console.log(javaScript[key]);
  }
}

// 점 표기법     => 변수 설정 x
// 대괄호 표기법  => 변수 설정 o

/* -------------------------------------------------------------------------- */
/*       for in 배열에도 접근이 가능하지만 순서보장이 안되고 성능이 저하됨         */
/* -------------------------------------------------------------------------- */
const tens = [10, 100, 1000, 10_000];

for (const key in tens) {
  if (Object.hasOwnProperty.call(tens, key)) {
    console.log(tens[key]);
  }
}
