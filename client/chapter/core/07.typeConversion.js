/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

console.log(String(YEAR));
console.log(typeof (YEAR + ''));

// undefined, null

let days = null;

console.log(days);
console.log(days + ''); // 문자 null로 형변환

let friends;
console.log(friends);
console.log(friends + ''); // 문자 undefined로 형변환

// boolean

let isClicked = true;

console.log(String(isClicked));
console.log('isClicked', isClicked);

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;
console.log(Number(friend));

// null

let money = null;
console.log(Number(money));

// boolean

let isMarried = true;
console.log(Number(isMarried));

// string
console.log('문자 -> 숫자');

let num = '100';

console.log(Number(num)); // 명시적 형변환 100
console.log(num * 1); // 암시적 형변환 100
console.log(num / 1); // 암시적 형변환 100
console.log(+num); // 암시적 형변환 100

// numeric string
const width = '120.5px';
console.log('문자+숫자 -> 숫자');

console.log(Number(width));
console.log(parseInt(width, 10)); // 뒤에 숫자는 n진수

/* 데이터 → 불리언 ---------------------------------------------------------- */
// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log('데이터 -> 불리언');
console.log(Boolean(friend)); // false
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(' ')); // true
console.log(Boolean('0')); // true
