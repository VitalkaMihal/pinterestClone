import { generateCards } from './genCards';
import { searchPin } from './searchPinterest';
import { downloadOnScreen } from './download';
import { eventt } from './ut-modal';
import { reportshow } from './ut-modal';
import { dropshow } from './ut-modal';
import { addshow } from './ut-modal';

const localSt = {
    localSt2: [],
    localSt3: []
}
localSt.localSt2 = JSON.parse(localStorage.getItem('desk2'))??[];
localSt.localSt3 = JSON.parse(localStorage.getItem('desk3'))??[];


const searchForm = document.querySelector('.search-bar');


let imgNum = 0;
let InitImg = 0;
let jSmall = 0;
let jMedium = 0;
let jLarge = 0;
let cardSmall = document.querySelectorAll('.card_small');
let cardMedium = document.querySelectorAll('.card_medium');
let cardLarge = document.querySelectorAll('.card_large');
let download = document.querySelectorAll('.bottom-bar__link-download');
let AllCards = document.querySelectorAll('.card');


async function showPicture() {

    cardSmall = document.querySelectorAll('.card_small');
    cardMedium = document.querySelectorAll('.card_medium');
    cardLarge = document.querySelectorAll('.card_large');

    let response = await fetch('https://63c6e145d307b7696743082f.mockapi.io/pic');

    let picture = await response.json();


    // отображаем фотографии
    for(let i = imgNum; i < imgNum + 5; i++){
        cardSmall[jSmall].style.backgroundImage = `url('${picture[i].image} + ?random=${i}')`;
        cardSmall[jSmall].id = picture[i].id;
        cardSmall[jSmall].querySelector('.bottom-bar__link-download').id = picture[i].id;
        cardSmall[jSmall].querySelector('.bottom-bar__link-web').textContent = picture[i].hashTag;
        cardSmall[jSmall].querySelector('.bottom-bar__avatar').src = picture[i].avatar;
        InitImg = i;
        jSmall++;
    };

    imgNum = InitImg + 1;
    
    for(let i = imgNum; i < imgNum + 7; i++){
        cardMedium[jMedium].style.backgroundImage = `url('${picture[i].image} + ?random=${i}')`;
        cardMedium[jMedium].id = picture[i].id;
        cardMedium[jMedium].querySelector('.bottom-bar__link-download').id = picture[i].id;
        cardMedium[jMedium].querySelector('.bottom-bar__link-web').textContent = picture[i].hashTag;
        cardMedium[jMedium].querySelector('.bottom-bar__avatar').src = picture[i].avatar;
        InitImg = i;
        jMedium++;
    };

    imgNum = InitImg + 1;

    for(let i = imgNum; i < imgNum + 4; i++){
        cardLarge[jLarge].style.backgroundImage = `url('${picture[i].image} + ?random=${i}')`;
        cardLarge[jLarge].id = picture[i].id;
        cardLarge[jLarge].querySelector('.bottom-bar__link-download').id = picture[i].id;
        cardLarge[jLarge].querySelector('.bottom-bar__link-web').textContent = picture[i].hashTag;
        cardLarge[jLarge].querySelector('.bottom-bar__avatar').src = picture[i].avatar;
        InitImg = i;
        jLarge++;
    };

    imgNum = InitImg + 1;

};
showPicture();

let wasUsedScroll = true;
let wasUsedScrollNumber = 1;

async function scrollWindow() {
    if (wasUsedScroll){
        wasUsedScroll = false;
        wasUsedScrollNumber++;
        if(wasUsedScrollNumber > 6) {
            return
        }
        setTimeout(() => {wasUsedScroll = true}, 1000);
        generateCards();
        showPicture()
    };
}




const modalWindow = document.createElement('div');
modalWindow.innerHTML = `
<div class="dropdown-content" id="myDropdown">
<div class="dropdown-button">
<div class="dropdown-item">
<div class="dropdown-list"><a class="dropdown-content__add">Добавить на доску</a></div>
<div class="dropdown-list"><a class="dropdown-content__report">Пожаловаться</a></div>
</div></div></div>
`



function bottomBar(eventt){
    if (eventt.target.closest('.bottom-bar__link-more')){
        modalWindow.style.display = 'block';
        eventt.target.parentNode.parentNode.parentNode.parentNode.append(modalWindow);
    } else {
        modalWindow.style.display = 'none';
    }
};

modalWindow.querySelector('.dropdown-content__add').addEventListener('click', () => {
    document.querySelector('.ut-table').classList.add('js-showw');
});

document.querySelector('.ut-table-items2').addEventListener('click', () => {
    if (JSON.parse(localStorage.getItem('desk2'))?.indexOf(modalWindow.parentNode.id)??-1 === -1) {
        localSt.localSt2.push(modalWindow.parentNode.id);
        localStorage.setItem('desk2' , JSON.stringify(localSt.localSt2));
    }
    document.querySelector('.ut-table').classList.remove('js-showw');
} );

document.querySelector('.ut-table-items3').addEventListener('click', () => {
    if (JSON.parse(localStorage.getItem('desk3'))?.indexOf(modalWindow.parentNode.id)??-1 === -1){
        localSt.localSt3.push(modalWindow.parentNode.id);
        localStorage.setItem('desk3' , JSON.stringify(localSt.localSt3));
    }
    document.querySelector('.ut-table').classList.remove('js-showw');
} );

modalWindow.querySelector('.dropdown-content__report').addEventListener('click', () => {
    document.querySelector('.ut-popup').classList.add('js-show');
});

document.querySelector('.ut-popup__cancel-btn').addEventListener('click', () => {
    document.querySelector('.ut-popup').classList.remove('js-show');
    preventDefault();
});

document.querySelector('.ut-popup__next-btn').addEventListener('click', () => {
    document.querySelector('.ut-popup').classList.remove('js-show');
    alert('жалоба отправлена');
    preventDefault();
});


document.addEventListener('click', bottomBar); 
document.addEventListener('scroll', scrollWindow);
searchForm.addEventListener('input', () => searchPin(searchForm, cardSmall, cardMedium, cardLarge));
document.addEventListener('click', (e) => downloadOnScreen(e)(download, AllCards));


export { scrollWindow,showPicture };
