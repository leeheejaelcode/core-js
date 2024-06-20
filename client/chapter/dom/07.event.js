/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler() {
  console.log('클릭이벤트 발생');
}

const first = getNode('.first');

// first.onclick = handler;

// 2. DOM 프로퍼티 : element.onclick = handler

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick(e) {
  console.log(e.target);
  console.log(e.offsetX);
}

const second = getNode('.second');

// 이벤트는 추가와 동시에 제거하는 기능을 가져야함
// 제거하지 않고 사용자의 컨트롤을 제어하면 불필요한 이벤트가 남기때문에
// 이벤트를 명시적으로 제거해주는것이 좋다.

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClickBall(e) {
  const { offsetX: xPos, offsetY: yPos } = e;

  const w = ball.offsetWidth;
  const h = ball.offsetheight;

  ball.style.transform = `translate(${xPos - w / 2}px, ${yPos - h / 2}px)`;
}
// ground.addEventListener('click', handleClickBall);

function handleMove({ offsetX: x, offsetY: y }) {
  let template =
    /*html*/
    `<div class="emotion" style="top:${y - 16}px; left:${x - 16}px">⭐</div>
    
    `;

  insertLast(ground, template);
}
// throttle(수도꼭지), debounce(공 튀김 방지)

function debounce(callback, limit = 1000) {
  let timeout;

  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.call(this, e);
    }, limit);
  };
}

// 즉시 실행 함수

// const debounce2 = (function (callback, limit = 1000) {
//   let timeout;

//   return function (e) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//        callback.call(this, e);
//     }, limit);
//   };
// })();

ground.addEventListener('mousemove', debounce(handleMove));

function throttle(callback, limit = 500) {
  let waiting = false;
  return function (e) {
    // return function (...arg){
    if (!waiting) {
      callback.call(this, e);
      // callback.apply(this,arg);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

document.addEventListener('mousemove', throttle(handleMove));
