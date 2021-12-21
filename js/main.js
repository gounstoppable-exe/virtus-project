let hamburger = document.querySelector(".ham_icon");
let navmenu = document.querySelector("#res_menu");
let leftarrow = document.querySelector(".back_arrow");
leftarrow.addEventListener("click", function closeNav() {
  navmenu.setAttribute("style", "left: -100vw;");
});
hamburger.addEventListener("click", function openNav() {
  navmenu.setAttribute("style", "left: 0;");
});
