import { generateCards } from './genCards';
import { scrollWindow, showPicture } from './script';

let menuButton = document.querySelector(".btn-drop-down");
let dropMenu = document.getElementById("drop-menu");

menuButton.addEventListener("click", function () {
  dropMenu.classList.toggle("dropdown");
});

document.addEventListener("click", (event) => {
  let dropMenu = document.getElementById("drop-menu");
  if (!dropMenu.contains(event.target) && !menuButton.contains(event.target)) {
    dropMenu.classList.add("dropdown");
  }
});

function desk1Gen() {
  const cards = document.querySelectorAll('.card');
  for (let i of cards) {
    i.style.display = 'block'
  };
  dropMenu.classList.toggle("dropdown");
};

async function desk2Gen() {
  if (document.querySelectorAll('.card').length < 90){
    generateCards();
      await showPicture();
  }
  if (document.querySelectorAll('.card').length < 90){
    generateCards();
      await showPicture();
  }
  if (document.querySelectorAll('.card').length < 90){
    generateCards();
      await showPicture();
  }
  if (document.querySelectorAll('.card').length < 90){
    generateCards();
      await showPicture();
  }
  if (document.querySelectorAll('.card').length < 90){
    generateCards();
      await showPicture();
  }
    

  const cards = document.querySelectorAll('.card');
  for (let i of cards) {
    i.style.display = 'none'
  };
  for (let i of cards) {
    for (let j of JSON.parse(localStorage.getItem('desk2'))) {
      if (i.id === j){
        i.style.display = 'block'
      }
    }
  };
  dropMenu.classList.toggle("dropdown");
};

async function desk3Gen() {
  if (document.querySelectorAll('.card').length < 90){
    generateCards();
      await showPicture();
  }
  if (document.querySelectorAll('.card').length < 90){
    generateCards();
      await showPicture();
  }
  if (document.querySelectorAll('.card').length < 90){
    generateCards();
      await showPicture();
  }
  if (document.querySelectorAll('.card').length < 90){
    generateCards();
      await showPicture();
  }
  if (document.querySelectorAll('.card').length < 90){
    generateCards();
      await showPicture();
  }

  const cards = document.querySelectorAll('.card');
  for (let i of cards) {
    i.style.display = 'none'
  };
  for (let i of cards) {
    for (let j of JSON.parse(localStorage.getItem('desk3'))) {
      if (i.id === j){
        i.style.display = 'block'
      }
    }
  };
  dropMenu.classList.toggle("dropdown");
};


document.querySelector('.dropdown-list2').addEventListener('click', desk2Gen );
document.querySelector('.dropdown-list1').addEventListener('click', desk1Gen );
document.querySelector('.dropdown-list3').addEventListener('click', desk3Gen );