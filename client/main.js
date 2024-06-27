/* global gsap */

// Repressentational State Transfer (REST API Architecture)

// XHR

// get 해당 데이터 가져오기
// delete

// body에 데이터 실어야 함

// post 어떠한 데이터를 실어보내서 그 데이터를 가지고 서버가 만들어줘 (body 필요)
// put body 내용만 나오게
// patch body 내용만 변경되게

import {
  tiger,
  getNode,
  changeColor,
  delayP,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
  attr,
  clearContents,
} from './lib/index.js';

const ENDPOINT = 'http://localhost:3000/users';

// 1. user 데이터 fetch 해주세요.
//     - tiger.get

// 2. fetch 데이터의 유저 이름만 콘솔 출력
//     - 데이터 유형 파악
//     - 적당한 메서드 사용하기

const userCardInner = getNode('.user-card-inner');

async function renderUserList() {
  // 에러처리할 때 promise-then / async await-then을 써도 되지만 try catch 가 가독성이 좋음

  // 데이터 통신에 걸리는 시간동안 svg 애니메이션 출력
  renderSpinner(userCardInner);

  // await delayP(2000);

  try {
    // 유저의 정보를 가져오지 올때 처리
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        // 애니메이션이 끝난 다음에 자기 자신을 찾고 지우는
        this._targets[0].remove();
      },
    });

    const response = await tiger.get(ENDPOINT);
    const data = response.data;

    data.forEach((user) => renderUserCard(userCardInner, user));

    changeColor('.user-card');

    gsap.from('.user-card', {
      y: -100,
      opacity: 0,
      stagger: 0.1,
    });
  } catch {
    // 유저의 정보를 가져오지 못했을 때 처리
    renderEmptyCard(userCardInner);
    console.error('에러 발생');
  }
}

renderUserList();

function handleDeleteCard(e) {
  const button = e.target.closest('button');
  if (!button) return;
  // 버튼에 인접한 article
  const article = button.closest('article');
  const index = article.dataset.index.slice(5);
  // const index = attr(article, 'data-index').slice(5);

  // delete가 된 상태를 보장할수 없어서 then을 붙혀줍니다
  tiger.delete(`${ENDPOINT}/${index}`).then(() => {
    // 기존 항목을 지우기
    clearContents(userCardInner);
    // 요청 보내고 렌더링하기
    renderUserList();
  });
}

userCardInner.addEventListener('click', handleDeleteCard);
