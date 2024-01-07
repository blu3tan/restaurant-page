
export function menuPageGenerator() {

    const pageContent = document.querySelector('.page-content');
    const katoBig = document.querySelector('.kato-big');

    const menuContainer = document.createElement('div');
    const menuItem1 = document.createElement('div');
    const menuItem2 = document.createElement('div');
    const menuItem3 = document.createElement('div');
    const menuItem4 = document.createElement('div');

    menuContainer.classList.add('menuContainer');
    menuItem1.classList.add('menuItem', 'nigiri');
    menuItem2.classList.add('menuItem', 'noodles');
    menuItem3.classList.add('menuItem', 'squid');
    menuItem4.classList.add('menuItem', 'rice');
    katoBig.classList.add('fade');
    setTimeout(() => {
        katoBig.style.display = 'none';
    }, 350)
    setTimeout(() => {
        pageContent.appendChild(menuContainer);
        menuContainer.append(menuItem1, menuItem2, menuItem3, menuItem4);
    }, 400)
    setTimeout(() => {
        menuContainer.classList.add('slide');
    }, 450)
    
}
