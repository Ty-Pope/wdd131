const menuButton = document.querySelector("#menuButton");
menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
 const menu = document.querySelector(".links");
 menu.classList.toggle("hide");
}

function handleResize() {
 const menu = document.querySelector(".links");
 if (window.innerWidth > 500) {
  menu.classList.remove("hide");
 } else {
  menu.classList.add("hide");
 }
}

handleResize();
window.addEventListener("resize", handleResize);
