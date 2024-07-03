import { insertFirst } from './lib/index.js';
class MyElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // 생성 될때 1회 호출
    // mount
    console.log('탄생함');
  }

  disconnectedCallback() {
    // 생명주기를 다 했을때
    // unmount
    console.log('죽음!');
  }
}
// 웹 컴포넌트 정의 (정의할 태크이름, 클래스네임)
customElements.define('c-element', MyElement);

const elem = document.createElement('c-element');

const app = document.getElementById('app');

app.appendChild(elem);
