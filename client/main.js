// Repressentational State Transfer (REST API Architecture)

// XHR

// get 해당 데이터 가져오기
// delete

// body에 데이터 실어야 함

// post 어떠한 데이터를 실어보내서 그 데이터를 가지고 서버가 만들어줘 (body 필요)
// put body 내용만 나오게
// patch body 내용만 변경되게

import { tiger, getNode, renderUserCard } from './lib/index.js';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

// 1. user 데이터 fetch 해주세요.
//     - tiger.get

// 2. fetch 데이터의 유저 이름만 콘솔 출력
//     - 데이터 유형 파악
//     - 적당한 메서드 사용하기

const userCardInner = getNode('.user-card-inner');

async function renderUserList() {
  const response = await tiger.get(ENDPOINT);
  const data = response.data;

  data.forEach((user) => renderUserCard(userCardInner, user));
}

renderUserList();
