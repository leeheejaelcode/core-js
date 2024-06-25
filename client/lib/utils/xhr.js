// XMLHttpRequest

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

//  [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete

const user = {
  name: 'tiger',
  age: 40,
  gender: 'male',
};

/* -------------------------------------------------------------------------- */
/*                                   get 통신                                 */
/* -------------------------------------------------------------------------- */

// xhr.open('GET', ENDPOINT);

// 비동기적 통신을 하기 위해서
// readystate가 바뀔때마다 알아서 호출해주는
// xhr.addEventListener('readystatechange', () => {
//   const { readyState, status, response } = xhr;
//   // 0~1은 너무 초기 단계라서 인식하지못함
//   if (readyState === 4) {
//     // 성공
//     if (status >= 200 && status < 400) {
//       // console.log(response);
//     } else {
//       // 실패
//     }
//   }
// });

// xhr.send();

/* -------------------------------------------------------------------------- */
/*                                   post 통신                                 */
/* -------------------------------------------------------------------------- */

// xhr.open('POST', ENDPOINT);

// // content-type을 text로 인식하기 때문에
// // json으로 변경해주기위해 setRequestHeader로 변경
// xhr.setRequestHeader('Content-Type', 'application/json');

// // 비동기적 통신을 하기 위해서
// // readystate가 바뀔때마다 알아서 호출해주는
// xhr.addEventListener('readystatechange', () => {
//   const { readyState, status, response } = xhr;
//   if (readyState === 4) {
//     // 성공
//     if (status >= 200 && status < 400) {
//       console.log(response);
//     } else {
//       // 실패
//       console.log('실패');
//     }
//   }
// });

// xhr.send(JSON.stringify(user));

/* -------------------------------------------------------------------------- */
/*                                // xhr 콜백 방식                                */
/* -------------------------------------------------------------------------- */

function xhr({
  method = 'GET',
  url = '',
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail('실패');
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

// xhr(
//   'GET',
//   ENDPOINT,
//   user,
//   (data) => console.log(data),
//   (err) => console.log(err)
// );

// 1. 무조건 매개변수 순서에 맞게 작성
// 2. 매개변수 안썼을 때

xhr({
  method: 'POST',
  url: ENDPOINT,
  body: user,
  onSuccess(data) {
    console.log(data);
  },
  onFail(err) {
    console.log(err);
  },
});

xhr.get = (url, onSuccess, onFail) => {
  xhr({ url, onSuccess, onFail });
};

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'post',
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};

xhr.get(
  ENDPOINT,
  (data) => console.log(data),
  (err) => console.log(err)
);

// 함수 안에 메서드를 정의할 수 없음
// 생성자 함수로만 함수 안에 메서드를 정의 할 수 있음(this바인딩 하기 때문에)

/* -------------------------------------------------------------------------- */
/*                                // xhr Promise 방식                         */
/* -------------------------------------------------------------------------- */
