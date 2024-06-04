/* ---------------- */
/* Switch           */
/* ---------------- */
let a = 100;

switch (a) {
  case 10:
    console.log('10입니다');
    break;
  case 11:
    console.log('11입니다');
    break;
  case 12:
    console.log('12입니다');
    break;
  default:
    console.log('없습니다.');
}

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = LATE_NIGHT;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch (thisTime) {
  case '아침':
    console.log('뉴스 기사 글을 읽는다.');
    break;
  case '점심':
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
  case '저녁':
    console.log('동네 한바퀴를 조깅한다.');
    break;
  case '밤':
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;
  case '심야':
  case '새벽':
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
  default:
    console.log('정해지지 않은 시간입니다.');
    break;
}

/* switch문 → if문 변환 
--------------------------------------------------- */
if (thisTime === '아침') {
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime === '점심') {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === '저녁') {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime === '밤') {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else if (thisTime === '심야' || '새벽') {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
} else {
  console.log('정해지지 않은 시간입니다.');
}

// let number = +prompt('0부터 6까지 입력해주세요');

function getRandom(n) {
  let value = Math.round(Math.random() * n);
  return value;
}

function getDay(value) {
  switch (value) {
    case 0:
      return '월';
    case 1:
      return '화';
    case 2:
      return '수';
    case 3:
      return '목';
    case 4:
      return '금';
    case 5:
      return '토';
    case 6:
      return '일';
    default:
      return '다른 숫자를 입력하셨군요?';
  }
}

console.clear();

function weekend() {
  let day = getDay(getRandom(6));
  // if (day === '토' || day === '일') {
  //   return console.log('주말입니다');
  // } else {
  //   return console.log('평일입니다');
  // }

  return day.includes('토') || day.includes('일') ? '주말입니다' : '평일입니다';
}

weekend();

/* switch vs. if -------------------------------------------------------- */
