/* -------------------------------------------------------------------------- */
/*                                    class                                   */
/* -------------------------------------------------------------------------- */

function addClass(node, className) {
  // if(typeof node ==='string') node = document.querySelector(node)
  // if (typeof className !== 'string') {
  //   throw new Error('addClass 함수의 두 번째 인수는 문자 타입이어야 합니다.');
  // }

  if (isString(node)) node = getNode(node);
  if (isArray(className)) {
    node.classList.add(...className);
    return;
  }
  if (!isString(className)) {
    throw new Error('addClass 함수의 두 번째 인수는 문자 타입이어야 합니다.');
  }
  node.classList.add(className);
}

// function addClass(node, className) {
//   if (typeof node === 'string') node = document.querySelector(node);

//   if (isArray(className)) {
//     console.log(className);
//     className.forEach((c) => node.classList.add(c));
//     return;
//   }

//   if (typeof className !== 'string') {
//     throw new TypeError(
//       'addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
//     );
//   }
//   node.classList.add(className);
// }

// addClass('.first', ['a', 'b', 'c']);

function removeClass(node, className) {
  if (isString(node)) node = getNode(node);
  if (!className) {
    node.className = '';
    return;
  }

  if (!isString(className)) {
    throw new Error(
      'removeClass 함수의 두 번째 인수는 문자 타입이어야 합니다.'
    );
  }
  node.classList.remove(className);
}

function toggleClass(node, className) {
  if (isString(node)) node = getNode(node);
  if (!isString(className)) {
    throw new Error(
      'removeClass 함수의 두 번째 인수는 문자 타입이어야 합니다.'
    );
  }
  return node.classList.toggle(className);
}

/* -------------------------------------------------------------------------- */
/*                                   style;                                   */
/* -------------------------------------------------------------------------- */

function getStyle(node, prop) {
  if (isString(node)) node = getNode(node);
  if (!(prop in document.body.style)) {
    throw new Error(
      'getstyle 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.'
    );
  }
  return getComputedStyle(node)[prop];
}

function setStyle(node, prop, value) {
  if (isString(node)) node = getNode(node);

  if (!(prop in document.body.style)) {
    throw new Error(
      'setStyle 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.'
    );
  }

  if (!value) {
    throw new ReferenceError('setStyle 함수의 세 번째 인수는 필수입니다.');
  }
  node.style[prop] = value;
}

const css = (node, prop, value) =>
  !value ? getStyle(node, prop) : setStyle(node, prop, value);

// css('.first', 'color');
// css('.first', 'color', 'orange');
