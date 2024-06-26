import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './type.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   first.style.top = '-100px';
//   second.style.top = '100px';
//   delay(() => {
//     first.style.rotate = '360deg';
//     second.style.rotate = '-360deg';
//     delay(() => {
//       first.style.left = '-100px';
//       second.style.left = '100px';
//       delay(() => {
//         first.style.left = '0px';
//         second.style.left = '0px';
//         delay(() => {
//           first.style.rotate = '-360deg';
//           second.style.rotate = '360deg';
//           delay(() => {
//             first.style.top = '0px';
//             second.style.top = '0px';
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const shouldRejected = false;

// 순서는 무조건 첫번째가 성공

const p = new Promise((성공, 실패) => {
  if (!shouldRejected) {
    성공('성공');
  } else {
    실패('실패');
  }
});

// console.log(p);

// 객체 합성
const defaultOptions = {
  shouldRejected: false,
  data: '성공!',
  errorMessage: '알 수 없는 오류!',
  timeout: 1000,
};

function delayP(options) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }

  const { shouldRejected, data, errorMessage, timeout } = config;

  console.log(config);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

delayP(3000).then(console.log);

// <Promise>
// delayP(500) // then은 두개의 함수를 받는데 첫번째는 성공함수, 두번째는 실패함수
//   .then((res) => {
//     console.log(res);
//     first.style.top = '-100px';
//     second.style.top = '100px';

//     return delayP();
//   })
//   .then((res) => {
//     console.log(res);
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';

//     return delayP();
//   })
//   .then((res) => {
//     console.log(res);
//     first.style.top = '0px';
//     second.style.top = '0px';
//   });
