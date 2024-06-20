/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용

// console.log(first.className);

// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

first.classList.add('bye');
first.classList.remove('hello');

// console.log(first.classList.contains('hello'));
// console.log(first.className);

// rest 파라미터
addClass('first', ['a', 'b', 'c']);
/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.background = 'dodgerblue';
// cssText를 나중에 선언하면 그 전에 선언된 css를 삭제시킴
first.style.cssText = `
  color:white;
  padding:1rem;
  border:1px solid red;
`;

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

// console.log(getComputedStyle(first)['font-size']);
