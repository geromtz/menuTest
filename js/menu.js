let btnMenu = document.querySelector('.hamburguer_menu');
let menuContainer = document.querySelector('.nav_bar_item__container');
let menuHamburgerLine = document.querySelectorAll('.hamburguer_menu_menu_line');
let main = document.querySelector('.main_container');

btnMenu.addEventListener('click',()=>{
    menuContainer.classList.toggle('show_menu');
    btnMenu.classList.toggle('hamburguer_menu__active');
    main.classList.toggle('main_menu_active');
    if(subMenu.classList.contains('submenu_active')) {
        subMenu.classList.remove('submenu_active');
    }

    for(i=0; i <= menuHamburgerLine.length; i++) {
        menuHamburgerLine[i].classList.toggle('menu_active');
    }
});

// Submenu
let navMenu = document.querySelector('.nav_bar_item__list');
let subMenu = document.querySelector('.submenu_container');

navMenu.addEventListener("click", (event)=>{
    let optionSelect = event.target;
    if (optionSelect.tagName === 'A') {
        optionSelect = optionSelect.parentNode;
    }   
    let subMenu = optionSelect.querySelector('.submenu_container');
    if(optionSelect.classList.contains('dropdown_menu')) {
        subMenu.classList.toggle('submenu_active');
    }
});