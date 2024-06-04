/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 0;

// do {
//   console.log(i);

//   if (i === 3) {
//     console.log('안녕하세용');
//   }
//   i++;
// } while (i < 5);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let result = +prompt('몇 번??');

// do {
//   // console.log('최초 실행된 메시지입니다.');

//   if (result < 0) {
//     break;
//   }
//   console.log(result);
//   result--;
// } while (result > 0);

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// let result = prompt('몇 번??');
// let i = 0;
// do {
//   console.log(i++);
// } while (result--);

/* first.nextSibling; nextSibling을 작성하고 다음 요소가 선택되는게 아닌 #text가 선택되는 이유는 줄바꿈을 하게되면서 공백문자가 들어가기때문에
 */
/* first.nextElementSibling nextElementSibling은 바로 다음 elements 요소가 선택됩니다 */

// html을 구성하는 가장 작은 요소를 통들어서 node(노드)라고 부릅니다.
// html은 node(노드)를 통해 각 구성됩니다.

// do {
//   first = first.nextSibling;
// } while (first.nodeType !== document.ELEMENT_NODE);
// nodeType이 1의 경우 ELEMENT_NODE를 반환합니다.
// first.nodeType !== 1

let first = document.querySelector('.first');

// 다음 요소 찾기
function next(node) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);
  return node;
}

next('.first');
// 이전 요소 찾기
function prev(node) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }
  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);
  return node;
}
const second = next('.first');
const pre = prev('.second');

prev('.second');
