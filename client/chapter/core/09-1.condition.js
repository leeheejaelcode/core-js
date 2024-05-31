/* ---------------- */
/* Condition        */
/* ---------------- */

// let result = prompt('자바스크립트 이름은 무엇인가요?', '');

// result.toLocaleLowerCase() == 'ecmascript'
//   ? alert('정답입니다.')
//   : alert('모르셨나요?');

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

function watchingMovie() {
  // 영화 봤니?
  let didWatchMovie = confirm('듄2 봤어?');

  // 영화 볼거니?
  let goingToWatchMovie;
  if (didWatchMovie) {
    goingToWatchMovie = '잘했어';
  } else {
    if ((goingToWatchMovie = confirm('볼거야?'))) {
      goingToWatchMovie = '재밌게봐';
    } else {
      goingToWatchMovie = '그 영화 꼭 봐';
    }
  }
  console.log(goingToWatchMovie);
}

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// let didWatchMovie = confirm('듄2 봤어?');

// // 영화 볼거니?
// let goingToWatchMovie;
// didWatchMovie
//   ? (goingToWatchMovie = '잘했어')
//   : (goingToWatchMovie = confirm('볼거야?')
//       ? (goingToWatchMovie = '재밌게봐')
//       : (goingToWatchMovie = '그 영화 꼭 봐'));
// console.log(goingToWatchMovie);

function render(node, isActive) {
  let template = `
    <div>${isActive ? '안녕~~!!' : '잘가~~!!'}</div>
  `;
  node.insertAdjacentHTML('beforeend', template);
}

render(document.body, true);
render(document.body, false);

// 멀티 조건부 연산자 식
// const solution = (arr) => {
//   let 합 = 0;
//   let 곱 = 1;
//   arr.forEach((a) => {
//     합 += a;
//     곱 *= a;
//   });
//   return 합 ** 2 > 곱 ? 1 : 0;
// };
// console.log(solution([3, 4, 5, 2, 1]));
// console.log(solution([5, 7, 8, 3]));
