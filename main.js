function fetchPage(name){
    fetch(name).then(function(response){
        response.text().then(function(text){
            document.querySelector('article').innerHTML = text;
        })
    });
}

const tg_btn = document.querySelector('.navbar-btn');
const menu = document.querySelector('.navbar-menu');
const logo = document.querySelector('.navbar-logo');

tg_btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

logo.addEventListener('click', () => {
    menu.classList.toggle('active');
});

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
});