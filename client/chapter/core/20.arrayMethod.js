/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const people = [
  {
    id: 0,
    name: '안재명',
    age: 25,
    job: '물음표살인마',
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/78.jpg',
    imgAlt: '이미지 대체텍스트 입니다.',
  },
  {
    id: 1,
    name: '황선우',
    age: 51,
    job: '요식업 사장님',
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/22.jpg',
    imgAlt: '이미지 대체텍스트 입니다.',
  },
  {
    id: 2,
    name: '유진',
    age: 12,
    job: '디스코드 봇',
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
    imgAlt: '이미지 대체텍스트 입니다.',
  },
  {
    id: 3,
    name: '김한울',
    age: 39,
    job: '비둘기',
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/70.jpg',
    imgAlt: '이미지 대체텍스트 입니다.',
  },
];

/* 요소 순환 ---------------------------- */

// forEach
people.forEach((user) => console.log(user.job));

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

// first.addEventListener('click', () => {
//   console.log('first를 클릭하셨습니다');
// });
// second.addEventListener('click', () => {
//   console.log('second를 클릭하셨습니다');
// });

const span = document.querySelectorAll('span');

span.forEach((tag) => {
  tag.addEventListener('click', function () {
    this.style.color = 'dodgerblue';
  });
});

/* 원형 파괴 ----------------------------- */
// push 뒤에 추가
// people.push('admin');

// pop 뒤에 삭제
// people.pop();

// unshift
// people.unshift('admin');

// shift
// people.shift();

// reverse
const arr = [...people];
arr.reverse();
// console.log(arr);

// splice
// people.splice(0, 2, '안녕', '잘가');

// sort
function compare({ age: a }, { age: b }) {
  if (a > b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
  if (a == b) return 0; // 두 값이 같은 경우
  if (a < b) return -1; // 첫 번째 값이 두 번째 값보다 작은 경우
}

// people.sort(compare);

/* 새로운 배열 반환 ------------------------ */
// 원본은 훼손하지 않음

// concat

// toSpliced
const toSpliced = people.toSpliced(0, 2);

// toSorted
const toSorted = people.toSorted(compare);
// toReversed
const toReversed = people.toReversed();

// map
const name = people.map((v) => v.name);
console.log(name);
const age = people.map((v) => v.age + 2);
console.log(age);

const cardTag = people.map(({ name, age, job, imgSrc, imgAlt }) => {
  let template = /* html*/ `
  <li class="userCard">
    <div class="imageField">
      <img src= "${imgSrc}" alt="${imgAlt}"/>
    </div>
    <ul class="contents">
    <li class="strong">이름 : ${name}</li>
    <li class="strong">나이 : ${age}</li>
    <li class="strong">직업 : ${job}</li>
    </ul>
  </li>`;
  return template;
});

const ul = document.querySelector('ul');
cardTag.forEach((tag) => {
  ul.insertAdjacentHTML('beforeend', tag);
});

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
const 황 = people.find((v) => v.name === '황선우');
console.log(황);

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

const filter = people.filter((item) => item.age > 20);
// console.log(...filter);

/* 요소별 리듀서(reducer) 실행 -------------- */

// const total = people.reduce((arr, cur) => {
//   return arr + cur.age;
// }, 0);
// console.log(total);

const template = people.reduce((acc, cur) => {
  return acc + `<li class="userCard">${cur.name} : ${cur.age}</li>`;
}, '');

ul.insertAdjacentHTML('afterbegin', template);

// reduce
// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '유진 정민 현주 재명';

// split : 문자 -> 배열

const stringToArray = str.split(' ');
console.log(stringToArray);

// join : 배열 -> 문자
const arrayToString = stringToArray.join('/');
console.log(arrayToString);

const products = [
  { name: '냉동 만두', price: 10000, brand: '비비고' },
  { name: '냉동 피자', price: 15000, brand: '오뚜기' },
  { name: '냉동 치킨 너겟', price: 12000, brand: '하림' },
  { name: '냉동 감자튀김', price: 8000, brand: '맥케인' },
  { name: '냉동 새우', price: 18000, brand: '곰곰' },
];

const forEach = (f, i) => {
  for (const a of i) f(a);
};

forEach((v) => v, [1, 2, 3]);

const map = (f, i) => {
  let result = [];
  for (const a of i) {
    result.push(f(a));
  }
  return result;
};

map((n) => n + 2, [1, 2, 3]);

const _filter = (f, i) => {
  let result = [];

  for (const a of i) {
    if (f(a)) {
      result.push(a);
    }
  }
  return result;
};

_filter((n) => n > 3, [1, 2, 3, 4, 5]);

const _reduce = (f, acc, i) => {
  if (!i) {
    // i = acc;
    // acc = i.shift();
    i = acc[Symbol.iterator]();
    acc = i.next().value;
  }
  for (const a of i) {
    acc = f(acc, a);
  }
  return acc;
};

const add = (a, b) => a + b;
_reduce((t, p) => t + p.price, 0, products);

console.log(
  _reduce(
    add,
    map(
      (p) => p.price,
      _filter((p) => p.price < 10000, products)
    )
  )
);
