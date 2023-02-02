function fetchPage(name){
    fetch(name).then(function(response){
        response.text().then(function(text){
            document.querySelector('article').innerHTML = text;
        })
    });
}

fetchPage('intro.html')

const tg_btn = document.querySelector('.navbar-btn');
const menu = document.querySelector('.navbar-menu');

tg_btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});


const navbarHeight = document.querySelector('.navbar').offsetHeight;
document.documentElement.style.setProperty("--navbar-height", navbarHeight + "px");


var menuList = document.querySelectorAll('li')

menuList.forEach(a => {
    a.addEventListener("click", () => {
        menu.classList.toggle('active');
    });
});

