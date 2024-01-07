import nigiri from './assets/nigiri.svg';
import rice from './assets/rice.svg';
import ramen from './assets/ramen.svg';
import squid from './assets/squid.svg';

export function menuPageGenerator() {

    const logoNigiri = document.createElement('object');
    logoNigiri.type = 'image/svg+xml';
    logoNigiri.data = nigiri;
    logoNigiri.classList.add('logoNigiri');

    const logoRice = document.createElement('object');
    logoRice.type = 'image/svg+xml';
    logoRice.data = rice;
    logoRice.classList.add('logoRice');

    const logoRamen = document.createElement('object');
    logoRamen.type = 'image/svg+xml';
    logoRamen.data = ramen;
    logoRamen.classList.add('logoRamen');

    const logoSquid = document.createElement('object');
    logoSquid.type = 'image/svg+xml';
    logoSquid.data = squid;
    logoSquid.classList.add('logoSquid');

    const menuNigiri = document.createElement('h2');
    menuNigiri.textContent = 'SUSHI & SASHIMI';

    const menuRice = document.createElement('h2');
    menuRice.textContent = 'POKE BOWLS';

    const menuSquid = document.createElement('h2');
    menuSquid.textContent = 'SEA FOOD DISHES';

    const menuRamen = document.createElement('h2');
    menuRamen.textContent = 'RAMEN & NOODLES';

    const pageContent = document.querySelector('.page-content');
    const katoBig = document.querySelector('.kato-big');

    const menuContainer = document.createElement('div');
    const menuItem1 = document.createElement('div');
    const menuItem2 = document.createElement('div');
    const menuItem3 = document.createElement('div');
    const menuItem4 = document.createElement('div');

    menuContainer.classList.add('menuContainer');
    menuItem1.classList.add('menuItem', 'nigiri');
    menuItem1.append(logoNigiri, menuNigiri);
    menuItem2.classList.add('menuItem', 'noodles');
    menuItem2.append(logoRice, menuRice);
    menuItem3.classList.add('menuItem', 'squid');
    menuItem3.append(logoSquid, menuSquid);
    menuItem4.classList.add('menuItem', 'rice');
    menuItem4.append(logoRamen, menuRamen);

    menuContainer.append(menuItem1, menuItem2, menuItem3, menuItem4);

    katoBig.classList.add('fade');
    setTimeout(() => {
        katoBig.style.display = 'none';
    }, 350)
    setTimeout(() => {
        pageContent.appendChild(menuContainer);
    }, 400)
    setTimeout(() => {
        menuContainer.classList.add('slide');
    }, 450)
    
}
