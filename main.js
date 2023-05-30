const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleProfileDesktopMenu);

function toggleProfileDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}