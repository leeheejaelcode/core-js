/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? (receivedEmailAddress = 'user@company.io')
    : (receivedEmailAddress = emailAddress);

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@company.io';
receivedEmailAddress = emailAddress || 'user@company.io';
/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WITDH = '10px';
const isActive = false;

console.log(0 || WITDH); // 10px
console.log(0 ?? WITDH); // 0

console.log(undefined || WITDH); // 10px
console.log(undefined ?? WITDH); // 10ox

console.log(isActive || WITDH); // 10px
console.log(isActive ?? WITDH); // false

console.log('' || WITDH); // 10px
console.log('' ?? WITDH); // ""

const solution = (a, b) => {
  let res = 0;
  if (a % 2 === 0 && b % 2 === 0) {
    res = Math.abs(a - b);
  } else if (a % 2 === 0 || b % 2 === 0) {
    res = 2 * (a + b);
  } else {
    res = a ** 2 + b ** 2;
  }
  return res;
};
console.log(solution(3, 5));
console.log(solution(6, 1));
console.log(solution(2, 4));

// a ||= b a가 false일때 b값을 a에 할당
// a &&= b a가 true b값을 a에 할당
// a ??= b a가 undefined,null b값을 a에 할당
