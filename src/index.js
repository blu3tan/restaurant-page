import { layoutGenerator } from "./layout-generator";
import { menuPageGenerator } from "./menu-page-content";
import "./main.css";

function navigation() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.addEventListener('click', menuPageGenerator);
}

layoutGenerator();
navigation();
