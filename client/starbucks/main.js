const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

// 함수를 밖으로 빼서 사용하기
const h = (t) => (t.style.height = '0');

/* 두개의 코드는 같은 기능을 한다
 전달하려는 아이템과 출력하는 아이템이 같을 때 사용이 가능하다.
 depthList.forEach((item)=>{
  console.log(item)
 }) 
 depthList.forEach(console.log); */

aList.forEach((a) => {
  a.addEventListener('mouseenter', () => {
    const target = a.lastElementChild;

    // 모든 depth의 높이를 0으로
    depthList.forEach(h);

    // target의 높이를 100px로
    target.style.height = '100px';
  });
});

header.addEventListener('mouseleave', () => depthList.forEach(h));
