const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))






































//--FAILED BURGER MENU// function burgerMenu(selector) {
   // let menu = $(selector);
    //let button = menu.find('.burger-menu__button');
   // let links = menu.find('.burger-menu__link');
   // let overlay = menu.find('.burger-menu__overlay');

   // button.on('click', (e) => {
   //     e.preventDefault();
   //     toggleMenu();
   // });

   // links.on('click', () => toggleMenu())
   // overlay.on('click', () => toggleMenu())

    //function toggleMenu() {
      //  menu.toggleClass('burger-menu_active');

       // if (menu.hasClass('burger-menu_active')) {
        //    $('body').css('overflow', 'hidden');
        //} else {
        //    $('body').css('overflow', 'visible');
       // }
  //  }
//}

//burgerMenu('.burger-menu');//