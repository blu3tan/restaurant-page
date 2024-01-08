import katoBigImg from "./assets/kato-big.png";

export function homePageGenerator() {
    
    const pageContent = document.querySelector('.page-content');
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');
    const katoBig = document.createElement('img');
    katoBig.classList.add('kato-big');
    katoBig.src = katoBigImg;

    homeContainer.append(katoBig);
    pageContent.appendChild(homeContainer);

    setTimeout(() => {
        homeContainer.classList.add('slide');
    }, 100)
}