import { layoutGenerator } from "./layout-generator";
import { menuPageGenerator } from "./menu-page-content";
import { removePage } from "./remove-page";
import { homePageGenerator } from "./home-page-content";
import "./main.css";

function navigation() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.addEventListener('click', menuPageGenerator);
}

function homeButton() {
    const homeMenu = document.querySelector('.nav-logo');
    homeMenu.addEventListener('click', homePageGenerator);
}

// Testing a function to retract the current page visible

function retractElement() {
    const navContact = document.querySelector('.nav-contact');
    navContact.addEventListener('click', removePage);
}

layoutGenerator();
navigation();
retractElement();
homeButton();
