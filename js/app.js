const cross = document.getElementById('menu-close-btn');
const mobileSec = document.querySelector('.mobile');
const closeCross = document.getElementById('close-btn');
const contentItems = document.getElementsByClassName('menu-item');

for (let i = 0; i < contentItems.length; i += 1) {
  contentItems[i].addEventListener('click', () => {
    mobileSec.classList.remove('visible');
  });
}

cross.addEventListener('click', () => {
  mobileSec.classList.add('visible');
});

closeCross.addEventListener('click', () => {
  mobileSec.classList.remove('visible');
});