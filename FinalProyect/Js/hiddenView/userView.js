//User View class
const menuBtn = document.getElementById('principal_menu');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const activeBtn = document.getElementById('sign_up_button')
const overlay = document.createElement('div');




overlay.classList.add('overlay');
document.body.appendChild(overlay);

menuBtn.addEventListener('click', () => {
  e.stopPropagation();
  sidebar.classList.add('active');
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});
