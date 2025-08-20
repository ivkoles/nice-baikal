let age = 17;
if (age >= 18) {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещен");
}

let stat = false; // Состояние

function changeHeader() {
    let h1 = document.getElementById("myTitle");
    // console.log(h1);
    stat = !stat; // Инвертирование
    if (stat == true) {
    h1.textContent = "Новый заголовок"; 
    h1.style.color = "red";
    h1.style.display = "none";
    } else {
    h1.textContent = "Старый заголовок";
    h1.style.color = "green";
    h1.style.display = "block";
    }
}

let topBtn = document.getElementById("topBtn");
const offsetY = document.documentElement.clientHeight; //Высота viewport

window.onscroll = function() {
    if(document.body.scrollTop > offsetY || document.documentElement.scrollTop > offsetY) {
        topBtn.style.display = "block";
} else {
    topBtn.style.display = "none";
}
}

function goTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-icon');
    const menuList = document.querySelector('.menu-list');

    // Меню: открытие и закрытие
    if(menuToggle && menuList) {
        menuToggle.addEventListener('click', () => {
            menuList.classList.toggle('active');
        });
    }
});

