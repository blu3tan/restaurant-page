import maneki from './assets/maneki.svg';
import dango from './assets/dango.svg';

export function contactPageGenerator() {

    const pageContent = document.querySelector('.page-content');
    const manekiSvg = document.createElement('object');
    manekiSvg.type = 'image/svg+xml';
    manekiSvg.data = maneki;
    manekiSvg.classList.add('maneki');

    const dangoSvg = document.createElement('object');
    dangoSvg.type = 'image/svg+xml';
    dangoSvg.data = dango;
    dangoSvg.classList.add('dango');

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'KATO SUSHI HOUSE';

    const address = document.createElement('span');
    address.classList.add('address');
    address.textContent = '3-5-1 Mina..meow..yama, Minato-ku, Tokyo';

    const happy = document.createElement('span');
    happy.classList.add('happy');
    happy.textContent = 'SUNDAY HAPPY HOUR';

    const hours = document.createElement('span');
    hours.classList.add('hours');
    hours.textContent = '6PM - 8PM';

    const book = document.createElement('span');
    book.classList.add('book');
    book.textContent = 'BOOK 080-9L1V-M30W';

    const meow = document.createElement('span');
    meow.classList.add('meow');
    meow.textContent = 'CALL RIGHT MEOW!!';

    const credits = document.createElement('a');
    credits.classList.add('credits');
    const creditsText = document.createTextNode("Itamae ;) Blu3");
    credits.appendChild(creditsText);
    credits.href = "https://github.com/blu3tan";

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');
    const contactSectionUp = document.createElement('div');
    contactSectionUp.classList.add('contactSectionUp');
    const contactSectionDown = document.createElement('div');
    contactSectionDown.classList.add('contactSectionDown');
    const telephone = document.createElement('div');
    telephone.classList.add('telephone');

    telephone.append(happy, hours, book, meow, credits);
    contactSectionUp.append(manekiSvg, telephone, dangoSvg);
    contactSectionDown.append(restaurantName, address);
    contactContainer.append(contactSectionUp, contactSectionDown);
    pageContent.appendChild(contactContainer);
    
    setTimeout(() => {
        contactContainer.classList.add('slide');
    }, 100)
    
}
