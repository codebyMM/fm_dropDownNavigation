const dropdown = document.querySelectorAll('.dropdown');
const clientList = document.querySelector('.client-list');
const btnToggle = document.querySelector('.btn-toggle');
const btnClose = document.querySelector('.btn-close');
const headerMenu = document.querySelector('.header-menu');
const backgroundElement = document.querySelector('.background');
const client = [
    './assets/images/client-databiz.svg',
    './assets/images/client-audiophile.svg',
    './assets/images/client-maker.svg',
    './assets/images/client-meet.svg'];

dropdown.forEach(dd => {
    dd.addEventListener('click', (e) => {
        const dropdownMenu = e.currentTarget.querySelector('.dropdown-menu');
        dropdownMenu.classList.toggle('show');
    });
});

[btnToggle, btnClose].forEach(btn => {
    btn.addEventListener('click', () => {
    headerMenu.classList.toggle('show-menu');
    backgroundElement.classList.toggle('show');
});
});

function showList() {
    return clientList.innerHTML = client.map(c => {
        return `<a href=""><img src="${c}" alt=""></a>`
    });
}
showList();