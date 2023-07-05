const btn = document.getElementById('menu-btn');
const menuList = document.getElementById('menu-list');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menuList.classList.toggle('flex');
    menuList.classList.toggle('hidden');
})