const menuButton = document.querySelector("#menuButton");
menuButton.addEventListener("click", toggleMenu);

const galleryClick = document.querySelector(".gallery");
galleryClick.addEventListener("click", viewHandler);

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

function viewerTemplate(pic, alt) {
 return ` <div class="viewer">
  <div id="close-div">
   <button class="close-viewer">X</button>
  </div>
  <img id="large-img" src="${pic}" alt="${alt}">
 </div>`;
}

function viewHandler(event) {
 // create a variable to hold the element that was clicked on from event.target
 let element = event.target;
 // get the src attribute from that element and 'split' it on the "-"
 let src = element.src;
 let alt = element.alt;
 if (src) {
  if (alt) {
   let source = src.split("-");
   // insert the viewerTemplate into the top of the body element
   const header = document.getElementById("header");
   //So it works in github pages (my username is ty-pope)
   let img = source[0] + "-" + source[1] + "-full.jpeg";
   //In IDE it is:
   //let img = source[0] + "-full.jpeg";
   header.insertAdjacentHTML("afterbegin", viewerTemplate(img, alt));
   // add a listener to the close button (X) that calls a function called closeViewer when clicked
   const closeButton = document.querySelector(".close-viewer");
   closeButton.addEventListener("click", closeViewer);
  }
 }
}

function closeViewer() {
 document.querySelector(".viewer").remove();
}

handleResize();
window.addEventListener("resize", handleResize);
