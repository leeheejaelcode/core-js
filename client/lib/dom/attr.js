function getAttr(node, prop) {
  if (isString(node)) node = getNode(node);
  // if(typeof node === 'string') node = document.querySelector(node);

  if (!isString(prop))
    throw new TypeError(
      'getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );

  return node.getAttribute(prop);
}

function typeError(message) {
  return new TypeError(message + '문자 타입 이어야 합니다.');
}
function setAttr(node, prop, value) {
  if (isString(node)) node = getNode(node);
  if (!isString(prop)) {
    typeError('setAttr 함수의 두 번째 인수는');
  }

  // prop에 data가 있으면 dataset으로 넣기
  if (prop.includes('data')) {
    let dataSlice = prop.slice(5);
    return (node.dataset[dataSlice] = value);
  }

  if (value == '') {
    // 빈 문자열인지 확인
    return node.removeAttribute(prop);
  }
  if (!value)
    // value가 입력되지 않았을 때
    throw new ReferenceError(
      'setAttr 함수의 세 번째 인수는 필수 입력값 입니다.'
    );
  node.setAttribute(prop, value);
}

const attr = (node, prop, value) =>
  !value ? getAttr(node, prop) : setAttr(node, prop, value);
