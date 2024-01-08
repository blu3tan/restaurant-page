
import boardSvg from "./assets/sushi-board-anim.svg";
import katoSvg from "./assets/sushi-kato-anim.svg";


export function layoutGenerator() {
    const content = document.getElementById('content');
    const pageLayout = document.createElement('div');
    const pageNav = document.createElement('div');
    const navLogo = document.createElement('div');
    const navMenu = document.createElement('div');
    const navContact = document.createElement('div');
    const navHours = document.createElement('div');
    const pageContent = document.createElement('div');

    pageLayout.classList.add('page-layout');
    pageNav.classList.add('page-nav');
    navLogo.classList.add('nav-logo');
    navMenu.classList.add('nav-menu', 'nav');
    navContact.classList.add('nav-contact', 'nav');
    navHours.classList.add('nav-hours');
    pageContent.classList.add('page-content');

    const logo = document.createElement('object');
    logo.type = 'image/svg+xml';
    logo.data = katoSvg;
    logo.classList.add('katoAnimation');

    const board = document.createElement('object');
    board.type = 'image/svg+xml';
    board.data = boardSvg;
    board.classList.add('boardAnimation');

    const menuLink = document.createElement('h2');
    menuLink.textContent = 'MENU';

    const contactLink = document.createElement('h2');
    contactLink.textContent = 'CONTACT';

    content.append(pageLayout);
    pageLayout.append(pageNav, pageContent);
    pageNav.append(navLogo, navMenu, navContact, navHours);
    navLogo.appendChild(logo);
    navMenu.appendChild(menuLink);
    navContact.appendChild(contactLink);
    navHours.appendChild(board);
}