class UserCard extends HTMLElement {
  constructor() {
    super();
    // 라이트 돔보다
    // 쉐도우 돔이 우선시 됩니다.
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <slot name="userage"></slot>
    <slot name="a"></slot>
    <div>nickName : kind-tiger <div>
    <slot></slot>
    <slot name="email">any@naver.com</slot>
    `;

    //  라이트돔에 slot을 작성하고 스크립트에서 슬롯의 name을 지정해주면 지정된 slot만 가져옴
    //  라이트돔에 slot을 작성하지 않으면 지정되지 않은 나머지 slot을 모두 가져옴
    //  slot이 동일하면 다 같이 불러옴
  }
}

customElements.define('user-card', UserCard);
