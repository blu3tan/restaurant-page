
export function removePage() {
    const content = document.querySelector('.page-content');
    const currentPage = content.querySelector('.page-content > div');
    currentPage.classList.remove('slide');

    setTimeout(() => {
        currentPage.remove();
    }, 200)
}