const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    observer: true,
    breakpoints: {
      850: {
        spaceBetween: 0,
        enabled: false
      },
    },
    pagination: { 
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
  });

  document.getElementsByClassName("swiper__button")[0].addEventListener("click", () => {
    document.getElementsByClassName("swiper-wrapper")[0].classList.toggle("swiper-wrapper--active");
  } );


const Search = document.getElementById("search");
const logo = document.getElementsByClassName("logo_header")[0]
Search.addEventListener("click", () => {
  logo.classList.add("logo_header--active");
})





const openMenu = document.getElementById("menu_button"); // по идентификатору id="burger" у кнопки открытия меню находим эту самую кнопку
const sidebar = document.getElementById("menu"); // также по идентификатору находим саму менюшку сайдбар

openMenu.addEventListener("click", () => {
  // на кнопку открытия меню навешиваем обработчик событий по клику, в котором выполняется функция
  sidebar.classList.add("menu--active"); // вешаем активный класс менюшке
});

const closeMenu = document.getElementById("close_menu"); // тут та же логика, только с закрытием
closeMenu.addEventListener("click", () => {
  sidebar.classList.remove("menu--active"); // но активный класс наоборот убираем
});
