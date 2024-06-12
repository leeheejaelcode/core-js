function earth() {
  let water = true;
  let gravity = 10;

  return (value) => {
    gravity = value;
    return [water, gravity];
  };
}

const ufo = earth();

console.log(ufo(-10));

const button = document.querySelector('button');
// IIFE으로
const handleClick = (() => {
  let isClicked = false;

  return () => {
    if (isClicked) document.body.style.background = 'white';
    else document.body.style.background = 'green';
    isClicked = !isClicked;
  };
})();

button.addEventListener('click', handleClick);

// 이벤트 리스터의 두번째 인수에는 함수가 들어가야하는데 ()이렇게 쓰기 싫으니
// 위에서 즉시실행 함수로 감싼걸 사용함

function useState(init) {
  let value = init;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}

const [getNumber, setNumber] = useState(10);
