let btnPnfi = document.getElementById("btn-pnfi");
let menuNavegacion = document.getElementById("menu-navegacion");
btnPnfi.addEventListener('click', function(){
    menuNavegacion.classList.toggle("viewMenu");
});
document.onload = carga();
function carga() {
const menu = document.getElementById("angle-view-sub-menu");
  menu.onclick = function () {
 $(this).siblings("ul").toggle();
  };
}
