let cardSmall = document.querySelectorAll(".card_small");
let cardMedium = document.querySelectorAll(".card_medium");
let cardLarge = document.querySelectorAll(".card_large");
let imgNum = 0;
let InitImg = 0;
let jSnall = 0;
let jMedium = 0;
let jLarge = 0;
async function showPicture() {
    let response = await fetch("https://63c6e145d307b7696743082f.mockapi.io/pic");
    let picture = await response.json();
    // отображаем фотографии
    for(let i = imgNum; i < imgNum + 5; i++){
        // ava.src = picture[i].avatar;
        cardSmall[jSnall].style.backgroundImage = `url('${picture[i].image} + ?random=${i}')`;
        InitImg = i;
        jSnall++;
    }
    imgNum = InitImg;
    for(let i1 = imgNum; i1 < imgNum + 7; i1++){
        cardMedium[jMedium].style.backgroundImage = `url('${picture[i1].image} + ?random=${i1}')`;
        InitImg = i1;
        jMedium++;
    }
    imgNum = InitImg;
    for(let i2 = imgNum; i2 < imgNum + 4; i2++){
        cardLarge[jLarge].style.backgroundImage = `url('${picture[i2].image} + ?random=${i2}')`;
        InitImg = i2;
        jLarge++;
    }
}
showPicture();

//# sourceMappingURL=index.09c24910.js.map
