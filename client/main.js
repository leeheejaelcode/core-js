class Button extends HTMLElement {
  constructor() {
    super();
    // console.log(this.id);
    // console.log(this.label); label은 input의 표준이기때문에
    // console.log(this.getAttribute('label')); 로 가져와야합니다
    // console.log(this.dataset.label); 이렇게 가져옵니다
    this.button = document.querySelector('button');
  }
  connectedCallback() {
    this._render();
  }
  disconnectedCallback() {}
  static get observedAttributes() {
    return ['id'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this._render();
    }
  }

  _render() {
    // 내가 수집한 button의 textContent를 나의 id값으로
    this.button.textContent = this.id;
  }
}

customElements.define('c-button', Button);

const c = document.querySelector('c-button');

let count = 0;
c.addEventListener('click', () => {
  c.setAttribute('id', ++count);
});
