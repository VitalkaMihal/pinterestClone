// import { generateCards } from './genCards';
let menuButton = document.querySelector(".btn-drop-down");
let dropMenu = document.getElementById("drop-menu");
menuButton.addEventListener("click", function() {
    dropMenu.classList.toggle("dropdown");
});
document.addEventListener("click", (event)=>{
    let dropMenu = document.getElementById("drop-menu");
    if (!dropMenu.contains(event.target) && !menuButton.contains(event.target)) dropMenu.classList.add("dropdown");
});
document.querySelector(".dropdown-list2").addEventListener("click", ()=>{
    console.log(123);
// generateCards();
// generateCards();
// generateCards();
// generateCards();
// generateCards();
// const cards = document.querySelectorAll('.card');
// for (let i of cards) {
//   i.style.display = 'none'
// }
});

//# sourceMappingURL=index.c366f814.js.map
