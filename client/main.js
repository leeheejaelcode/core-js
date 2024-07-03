// 어떠한 html 엘리먼트를 사용할지
class Button extends HTMLButtonElement {
  constructor() {
    super();
  }

  connectedCallback() {}

  disconnectedCallback() {}
}
// extend에 정의된 버튼을 c-button으로 확장
customElements.define('c-button', Button, { extends: 'button' });
