let hamburger = document.getElementById("hamburger");
let navUL = document.getElementById("links"); 

hamburger.addEventListener("click", () => {
   navUL.classList.toggle("show");
});