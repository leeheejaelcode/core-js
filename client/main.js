class Button extends HTMLElement {
  constructor() {
    super();
    // shadowDom을 열어두면 캡슐화가 되지 않은 상태
    this.attachShadow({ mode: 'open' });
    // shadowDom을 닫아놓으면 캡슐화가 된 상태
    // this.attachShadow({ mode: 'closed' });

    // this.attachShadow({ mode: 'closed' }); 닫힌 상태에서는
    // 참조를 해야지 접근이 가능합니다.

    // shadow돔은 캡슐화를 위해서 사용합니다.
    this.shadowRoot.innerHTML = `
      <button>hello</button>
    `;
  }

  connectedCallback() {}

  disconnectedCallback() {}
}

customElements.define('c-button', Button);

// elem.shadowRoot.querySelector('button')를 통해야지만 접근이 가능
console.log(
  document.querySelector('c-button').shadowRoot.querySelector('button')
);
