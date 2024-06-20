/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

const nav = getNode('nav');

/* 클래스를 사용한 위임 ---------------- */
// function handleClick(e) {
//   const target = e.target;
//   if (target.matches('.about')) {
//     target.style.color = 'red';
//   }
//   if (target.classList.contains('home')) {
//     target.style.color = 'blue';
//   }
//   if (target.classList.contains('contact')) {
//     target.style.color = 'green';
//   }
// }

/* 속성을 사용한 위임 ------------------ */

// function handleClick(e) {
//   const target = e.target;
//   const name = target.dataset.name;

//   if (name == 'about') {
//     target.style.color = 'red';
//   }
//   if (name == 'home') {
//     target.style.color = 'blue';
//   }
//   if (name == 'contact') {
//     target.style.color = 'green';
//   }
// }

/* 노드를 사용한 위임 ------------------ */
function handleClick(e) {
  const target = e.target;
  const li = target.closest('li');

  if (!li) return;
  if (li.textContent.includes('ABOUT')) {
    li.style.color = 'red';
  }
  if (li.textContent.includes('HOME')) {
    li.style.color = 'blue';
  }
  if (li.textContent.includes('CONTACT')) {
    li.style.color = 'green';
  }
}

nav.addEventListener('click', handleClick);

// const navList = document.querySelectorAll('nav li');

// navList.forEach((li,i)=>{
//   li.addEventListener('click',()=>{
//     console.log(i);

//     switch (i) {
//       case 0: console.log('about'); break;
//       case 1: console.log('home'); break;
//       case 2: console.log('contact'); break;
//     }
//   })
// })
