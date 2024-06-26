const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const tiger = async (url) => {
  // fetch는 기본값이 get입니다.

  const response = await fetch(url);
  //.json()은 json.parse를 해줍니다
  if (response.ok) {
    // response 안에 data라는 이름으로 response.json()을 넣음
    response.data = await response.json();
  }

  return response;
};

const response = await tiger(ENDPOINT);
console.log(response.data);
