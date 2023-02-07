
let pinContainer = document.querySelector('.pin_container');

let cardSmall = () =>  {
let cardsSmall = document.createElement('div');
cardsSmall.classList.add('card');
cardsSmall.classList.add('card_small');
cardsSmall.innerHTML = `
<div class="hover-zone">
    <div class="top-bar">
        <a class="top-bar__link-save">Сохранить</a>
    </div>
    <!-------------------->
    <div class="bottom-bar">
    <img class="bottom-bar__avatar" alt="ava">
        <a class="bottom-bar__link-web" href="#">lorem ipsum dolor.</a>
        <div class="bottom-bar__link-box">
            <a class="bottom-bar__link-download" href="#">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                    class="gUZ R19 U9O kVc" height="16" width="16" viewBox="0 0 24 24" aria-hidden="true"
                    aria-label="" role="img">
                    <path d="M21 14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v4h14v-4c0-1.1.9-2 2-2zM8.82 8.84c-.78.78-2.05.79-2.83 0-.78-.78-.79-2.04-.01-2.82L11.99 0l6.02 6.01c.78.78.79 2.05.01 2.83-.78.78-2.05.79-2.83 0l-1.2-1.19v6.18a2 2 0 1 1-4 0V7.66L8.82 8.84z"
                        fill="#111111" stroke-width="0px"></path>
                </svg>
            </a>
            <a class="bottom-bar__link-more">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                    class="gUZ R19 U9O kVc" height="16" width="16" viewBox="0 0 24 24" aria-hidden="true"
                    aria-label="" role="img">
                    <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"
                        fill="#111111" stroke-width="0px">
                    </path>
                </svg>
            </a>
        </div>
    </div>
</div>
`;
pinContainer.append(cardsSmall);
}

let cardMedium = () => {
let cardsMedium =  document.createElement('div');
cardsMedium.classList.add('card');
cardsMedium.classList.add('card_medium');
cardsMedium.innerHTML = `
<div class="hover-zone">
            <div class="top-bar">
                <a class="top-bar__link-save">Сохранить</a>
            </div>
            <!-------------------->
            <div class="bottom-bar">
            <img class="bottom-bar__avatar" alt="ava">
                <a class="bottom-bar__link-web" href="#">lorem ipsum dolor.</a>
                <div class="bottom-bar__link-box">
                    <a class="bottom-bar__link-download" href="#">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                             class="gUZ R19 U9O kVc" height="16" width="16" viewBox="0 0 24 24" aria-hidden="true"
                             aria-label="" role="img">
                            <path d="M21 14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v4h14v-4c0-1.1.9-2 2-2zM8.82 8.84c-.78.78-2.05.79-2.83 0-.78-.78-.79-2.04-.01-2.82L11.99 0l6.02 6.01c.78.78.79 2.05.01 2.83-.78.78-2.05.79-2.83 0l-1.2-1.19v6.18a2 2 0 1 1-4 0V7.66L8.82 8.84z"
                                  fill="#111111" stroke-width="0px"></path>
                        </svg>
                    </a>
                    <a class="bottom-bar__link-more">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                             class="gUZ R19 U9O kVc" height="16" width="16" viewBox="0 0 24 24" aria-hidden="true"
                             aria-label="" role="img">
                            <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"
                                  fill="#111111" stroke-width="0px">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
`;
pinContainer.append(cardsMedium);
}

let cardLarge = () => {
    let cardsLarge =document.createElement('div');
cardsLarge.classList.add('card');
cardsLarge.classList.add('card_large');
cardsLarge.innerHTML = `
    <div class="hover-zone">
        <div class="top-bar">
            <a class="top-bar__link-save">Сохранить</a>
        </div>
        <!-------------------->
        <div class="bottom-bar">
        <img class="bottom-bar__avatar" alt="ava">
            <a class="bottom-bar__link-web" href="#">lorem ipsum dolor.</a>
            <div class="bottom-bar__link-box">
                <a class="bottom-bar__link-download" href="#">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                        class="gUZ R19 U9O kVc" height="16" width="16" viewBox="0 0 24 24" aria-hidden="true"
                        aria-label="" role="img">
                        <path d="M21 14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v4h14v-4c0-1.1.9-2 2-2zM8.82 8.84c-.78.78-2.05.79-2.83 0-.78-.78-.79-2.04-.01-2.82L11.99 0l6.02 6.01c.78.78.79 2.05.01 2.83-.78.78-2.05.79-2.83 0l-1.2-1.19v6.18a2 2 0 1 1-4 0V7.66L8.82 8.84z"
                            fill="#111111" stroke-width="0px"></path>
                        </svg>
                </a>
                <a class="bottom-bar__link-more">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                        class="gUZ R19 U9O kVc" height="16" width="16" viewBox="0 0 24 24" aria-hidden="true"
                        aria-label="" role="img">
                        <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"
                            fill="#111111" stroke-width="0px">
                        </path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
`;
pinContainer.append(cardsLarge);
}

const generateCards = () => {
    

cardSmall();
cardMedium();
cardLarge();
cardMedium();
cardSmall();
cardLarge();
cardMedium();
cardSmall();
cardMedium();
cardSmall();
cardMedium();
cardLarge();
cardMedium();
cardSmall();
cardMedium();
cardLarge();

};

export {generateCards};