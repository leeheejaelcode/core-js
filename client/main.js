const app = document.querySelector('#app');
// const temp = document.querySelector('#temp');

const template = document.createElement('template');

template.innerHTML = `
<div>안녕하세요</div>
<div>감사해요</div>
<div>잘있어요</div>
<div>다시만나</div>
`;

// 바로는 넣을수 없고 복제를 하고 넣어야함
// 템플릿은 복제를 하고 씁니다!
// cloneNode는 돔의 메서드
const clone = template.content.cloneNode(true);

// template는 fragment입니다 의미없는 그룹핑
app.appendChild(clone);
