import {
  attr,
  getNode,
  getNodes,
  endScroll,
  insertLast,
  diceAnimation,
  clearContents,
} from './lib/index.js';
// import를 함수가 아니라서 명시적으로 작성하지 않아도 실행이 됩니다.

// 1. 주사위 애니메이션
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation() 실행 될 수 있도록

const [rollingButton, recordButton, resetButton] = getNodes(
  '.buttonGroup > button'
);
const recordListWrapper = getNode('.recordListWrapper');

let count = 0;
let total = 0;

function createItem(value) {
  const template =
    /*html */
    `
  <tr>
    <td>${++count}</td>
    <td>${value}</td>
    <td>${(total += +value)}</td>
  </tr>
  `;

  return template;
}

function renderRecordItem() {
  // const diceValue = getNode('#cube').getAttribute('dice');
  const diceValue = attr(getNode('#cube'), 'dice');

  insertLast('.recordList tbody', createItem(diceValue));

  endScroll(recordListWrapper);
}

const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return function () {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }
    isClicked = !isClicked;
  };
})();

function handleRecord() {
  recordListWrapper.hidden = false;
  renderRecordItem();
}

function handleReset() {
  recordListWrapper.hidden = true;
  clearContents('tbody');
  count = 0;
  total = 0;
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
