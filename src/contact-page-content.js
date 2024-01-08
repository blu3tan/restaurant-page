import maneki from './assets/maneki.svg';

export function contactPageGenerator() {

    const pageContent = document.querySelector('.page-content');
    const manekiSvg = document.createElement('object');
    manekiSvg.type = 'image/svg+xml';
    manekiSvg.data = maneki;
    manekiSvg.classList.add('maneki');

    const restaurantName = document.createElement('h2');
    restaurantName.textContent = 'KATO SUSHI HOUSE';

    const contactContainer = document.createElement('div');
    // const contactSectionUp = document.createElement('div');
    // const contactSectionDown = document.createElement('div');

    contactContainer.classList.add('contactContainer');

    pageContent.appendChild(contactContainer);
    
    setTimeout(() => {
        contactContainer.classList.add('slide');
    }, 100)
    
}
