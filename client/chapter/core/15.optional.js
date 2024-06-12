/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */

const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q',
  },
  // getFullName() {
  //   return `${this.brand}, ${this.maker}`;
  // },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }

// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.
portableFan && portableFan.photos && portableFan.photos.animate;

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.
portableFan.photos?.animate;

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

const fullName = portableFan.getFullName?.();

console.log(fullName);

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.

// sync(동기) async(비동기)
// 자바스크립트는 단일 쓰레드로 동작합니다.
// 그렇기 때문에 stack에는 하나의 코드만 실행이 가능합니다.

const button = document.querySelector('.my-button');

const id = setTimeout(() => {
  const template = /* html */ `
    <button type="button" class="my-button">my-button</button>
  `;
  // button이 생성되기 전에 그냥 이벤트를 바인딩하게되면 위험하며 에러가 발생하기 때문에 ?. 을 사용하여 에러를 발생시키지 않게 합니다.
  document.body.insertAdjacentHTML('beforeend', template);
}, 1000);

id;

// clearTimeout(id)

button?.addEventListener('click', () => {
  console.log('clicked~!');
});

// 연산 오래걸리는 작업

let count = 0;

// const id2 = setInterval(() => {
//   console.log(++count);

//   document.querySelector('.first').style.transform =
//     `translateY(${count}px) rotate(${count}deg)`;

//   if (count >= 10) {
//     clearInterval(id2);
//   }
// }, 10);

let counter = 0;
function animation() {
  console.log(++counter);
  const id = requestAnimationFrame(animation);
  if (counter >= 10) {
    cancelAnimationFrame(id);
  }
}

animation();
