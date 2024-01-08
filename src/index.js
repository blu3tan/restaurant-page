import { layoutGenerator } from "./layout-generator";
import { menuPageGenerator } from "./menu-page-content";
import { removePage } from "./remove-page";
import { homePageGenerator } from "./home-page-content";
import "./main.css";

let pageActive = 'home'

function startPage() {
    layoutGenerator();
    homePageGenerator();
    const navMenu = document.querySelector('.nav-menu');
    navMenu.addEventListener('click', () =>{
        if (pageActive == 'menu') {
            return
        }
        else {
            removePage()
            setTimeout(() => {
                menuPageGenerator();
                pageActive = 'menu'
            }, 300)
        }

    });

    const homeMenu = document.querySelector('.nav-logo');
    homeMenu.addEventListener('click', () =>{
        if (pageActive == 'home') {
            return
        }
        else {
            removePage()
            setTimeout(() => {
                homePageGenerator();
                pageActive = 'home'
            }, 300)
        }
    });
}

startPage();


