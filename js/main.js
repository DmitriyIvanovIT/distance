const mMenu = document.querySelector('.m-menu'),
menuSidebar = document.querySelector('.menu-sidebar');

const sidebarToggle = () => {
    menuSidebar.classList.toggle('menu-sidebar-active');
}

mMenu.addEventListener('click', sidebarToggle);
