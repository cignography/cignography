function fetchPage(name){
    fetch(name).then(function(response){
        response.text().then(function(text){
            document.querySelector('article').innerHTML = text;
        })
    });
}

function addScript(src) {
    var s = document.createElement('new');
    s.type = 'text/javascript';
    s.src = src+'.js';
}

fetchPage('intro.html')

const tg_btn = document.querySelector('.navbar-btn');
const menu = document.querySelector('.navbar-menu');

tg_btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const navbarHeight = document.querySelector('.navbar').offsetHeight;
document.documentElement.style.setProperty("--navbar-height", navbarHeight + "px");


// 메뉴 전체에 active toggle 기능 넣기

var menuList = document.querySelectorAll('li')

menuList.forEach(a => {
    a.addEventListener("click", () => {
        menu.classList.toggle('active');
    });
});

// resize가 발생할시 --vh변수에 viewport 높이 재정의
window.addEventListener('resize', calcHeight);

function calcHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
}
calcHeight()