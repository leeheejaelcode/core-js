/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// 1. 객체의 상속
// 2. 생성자 함수의 상속
// 3. 생성자 함수 모던 방식 class

class Animal {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
    this.tail = true;
    this.stomach = [];
  }
  get eat() {
    return this.stomach;
  }
  set eat(food) {
    this.stomach.push(food);
  }
}

const a = new Animal('포동이', 5); // class문법은 new 키워드로 생성 불가능

console.log(a);

a.eat = '고기';
console.log(a.eat);

class Tiger extends Animal {
  constructor(name, legs) {
    super(name, legs);
    this.pattern = '호랑이무늬';
  }
  // tiger만이 options 이라는 스태틱 자료
  // tiger 안에서만 사용되기 때문에 안전하게 보호가 된다
  static options = {
    version: '1.0.0',
    company: '8b-studio',
    ceo: '심선범',
  };

  static bark(sound) {
    // 스태틱 메서드 작성 법
    return sound + `🐯`;
  }

  hunt(target) {
    return `${target}에게 조용히 접근한다.`;
  }
}

const 호랑이 = new Tiger('호돌이', 4);
console.log(호랑이);

// Array의 구조
class Array extends Object {
  constructor() {
    super();
  }
  forEach(callback, arg) {}
  reduce(callback, arg) {}
  map(callback, arg) {}
  static isArray(callback, arg) {}
  static from(callback, arg) {}
}

new Array();

// Model   (데이터)
// View    (렌더링)
// Control (이벤트)

// class Todo {
//   target = null;
//   registerButton = null;
//   list = null;

//   constructor({ input, button, renderPlace }) {
//     this.target = document.querySelector(input);
//     this.registerButton = document.querySelector(button);
//     this.list = document.querySelector(renderPlace);
//     this.todoListArray = [];
//     this.data;

//     this.registerEvent();

//     this.target.addEventListener('input', () => {
//       this.data = this.currentInputTodoData;
//     });
//   }

//   get currentInputTodoData() {
//     return this.target.value;
//   }

//   set currentInputTodoData(value) {
//     this.target.value = value;
//   }

//   get todoList() {
//     return this.todoListArray;
//   }

//   set todoList(value) {
//     this.todoList.push(value);
//   }

//   #createList() {
//     let template = `
//       <li>${this.data}</li>
//     `;
//     return template;
//   }

//   render() {
//     this.list.insertAdjacentHTML('beforeend', this.#createList());
//     this.target.value = '';
//   }

//   addTodoData() {
//     this.todoList = this.data;
//   }

//   registerEvent() {
//     this.registerButton.addEventListener('click', () => {
//       this.addTodoData();
//       this.render();
//     });
//   }
// }

// const button = new Todo({
//   input: '#todo',
//   button: '.register',
//   renderPlace: '.todoList',
// });

// const button2 = new Todo({
//   input: '#todo2',
//   button: '.register2',
//   renderPlace: '.todoList2',
// });

const solution = (a) => {
  for (let i = 0; i < a.length; i++) {
    if ((a.length & (a.length - 1)) !== 0) {
      a.push(0);
    }
  }
  return a;
};

console.log(solution([1, 2, 3, 4, 5, 6]));
