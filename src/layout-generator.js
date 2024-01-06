import katoImg from "./assets/kato.png";
import katoBigImg from "./assets/kato-big.png";
import boardImg from "./assets/board.png";


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

    const logo = document.createElement('img');
    logo.src = katoImg;

    const board = document.createElement('img');
    board.src = boardImg;

    const katoBig = document.createElement('img');
    katoBig.src = katoBigImg;

    const menuLink = document.createElement('h2');
    menuLink.textContent = 'MENU';

    const contactLink = document.createElement('h2');
    contactLink.textContent = 'CONTACT';

    content.append(pageLayout);
    pageLayout.appendChild(pageNav);
    pageLayout.appendChild(pageContent);
    pageNav.append(navLogo, navMenu, navContact, navHours);
    navLogo.appendChild(logo);
    navMenu.appendChild(menuLink);
    navContact.appendChild(contactLink);
    navHours.appendChild(board);
    pageContent.appendChild(katoBig);
}