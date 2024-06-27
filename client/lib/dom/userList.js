import { insertLast } from './insert.js';

function createUserCard({
  id,
  name = 'tiger',
  email = 'tiger@naver.com',
  website = 'tiger@tiger.com',
}) {
  const template = `
  <article class="user-card" data-index="user-${id}">
     <h3 class="user-name">${name}</h3>
     <div class="user-resource-info">
       <div>
         <a class="user-email" href="${email}"
           >${email}</a
         >
       </div>
       <div>
         <a
           class="user-website"
           href="${website}"
           target="_blank"
           rel="noopener noreferer"
           >${website}</a
         >
       </div>
     </div>
     <button class="delete">삭제</button>
   </article>
  `;

  return template;
}

export function renderUserCard(target, data) {
  insertLast(target, createUserCard(data));
}
