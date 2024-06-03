/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log('AandB : ', AandB);

// 논리곱 할당 연산자
// a &&= b;

// 논리합(또는) 연산자
let AorB = a || b;
console.log('AorB : ', AorB);
// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };
console.log('whichFalsy : ', whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };
console.log('whichTruthy : ', whichTruthy);

function login() {
  let userName = prompt('누구세요?');

  // userName 이 null, undefined => 아래 코드 실행 안함.

  if (userName == null || undefined) return;

  if (userName.toLowerCase() == 'admin') {
    // 옵셔널 체이닝 null이나 undefined가 나오면 다음 조건이 실행되지않게

    let passWord = prompt('비밀번호는요?');

    if (passWord.toLowerCase() == 'themaster') {
      // 옵셔널 체이닝 활용..
      console.log('환영합니다');
    } else if (passWord == null) {
      console.log('취소되었습니다.');
    } else {
      console.log('인증에 실패하였습니다.');
      login();
    }
  } else if (userName === null || userName?.replace(/\s*/g, '') === '') {
    console.log('취소');
  } else {
    console.log('실패');
  }
}

login();
