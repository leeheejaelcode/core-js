/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// 생성자 함수

// 객체의 프로토타입 접근 __proto__

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  set eat(food) {
    this.stomach.push(food);
  },
  get eat() {
    return this.stomach;
  },
};

animal.eat = '고기';
animal.eat;

console.log(animal);

const tiger = {
  pattern: '호랑이무늬',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal,
};

const 백두산호랑이 = {
  color: 'white',
  name: '백돌이',
  __proto__: tiger,
};

const 한라산호랑이 = {
  color: 'orange',
  name: '한돌이',
  __proto__: tiger,
};

백두산호랑이.hunt('사슴');

console.log(백두산호랑이);

// 생성자 함수

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function () {
    return this.stomach;
  };
  this.setEat = function (food) {
    this.stomach.push(food);
  };
}

const a1 = new Animal();
console.log(a1);

function Tiger(name) {
  Animal.call(this); // 여기서 this는 생성자 함수로 만들어진 인스턴스
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function (target) {
    return `${target}에게 조용히 접근한다.`;
  };
}

// 스태틱 메서드 추가하는 법
Tiger.bark = function (sound) {
  return sound;
};

const 금강산호랑이 = new Tiger('금순이');

// Tiger.prototype = a1; // 객체를 넣어줘야하기 때문에 a1로 지정
console.log(금강산호랑이.hunt('사슴'));
// 이렇게 인스턴스들만이 사용 가능한 매서드들은 인스턴스 매서드라고 부른다.

/* 함수의 메서드 (함수의 능력) */
const arr = [1, 2, 3, 4];

function sum(a, b, c) {
  console.log(this);
  return a + b + c;
}

sum.call('hello', 1, 2, 3); // this를 전달함 인수를 개별로 받음 => 함수 실행 o
sum.apply('hello', arr); // this를 전달함 인수를 배열로 받음 => 함수 실행 o

const b = sum.bind('hello', 1, 2, 3); // this를 전달함 인수를 개별로 받음 => 함수 실행 안함

console.log(sum.call('hello', 1, 1, 1)); // string hello

