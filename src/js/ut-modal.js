// export const causeBtnn = document.querySelectorAll('.bottom-bar__link-more');
// export const causeBtn = document.querySelectorAll('.report');
// const btnNext = document.querySelector('.ut-popup__next-btn');
// const inputCheck = document.querySelectorAll('.ut-popup-items__check-inp');
// const btnClose = document.querySelector('.ut-popup__cancel-btn');
// const modalWindowReport = document.querySelector('.ut-popup');
// const modalWindowAdd = document.querySelector('.ut-table');
// const dropMenu = document.querySelector(".table-show");
// const modalWindow = document.createElement('div');

// // document.addEventListener('click', function (eventt){
// //     console.log(eventt.target)
// //     if (eventt.target.closest('.bottom-bar__link-more')){
// //         modalWindow.innerHTML = `
// //             <div class="dropdown-content" id="myDropdown">
// //             <div class="dropdown-button">
// //             <div class="dropdown-item">
// //             <div class="dropdown-list"><a class="dropdown-content__add">Добавить на доску</a></div>
// //             <div class="dropdown-list"><a class="dropdown-content__report">Пожаловаться</a></div>
// //         </div></div></div>
// //         `
// //         modalWindow.classList.add('show');
// //         document.body.append(modalWindow);
// //     }
// // }); 
// window.addEventListener('click', et => {
//     const target = et.target
//     if (!target.closest('.dropdown-content') && !target.closest('.bottom-bar__link-more')) {
//         modalWindow.classList.remove('show');

//     }
// })

// document.addEventListener('click', function (addshow){
//     console.log(addshow.target)
//     if (addshow.target.closest('.dropdown-content__add')){
//         modalWindow.classList.remove('show');
//         modalWindowAdd.classList.add('js-showw');
//     }
//     document.body.classList.add('lock');
// });
// window.addEventListener('click', e => {
//     const target = e.target
//     if (!target.closest('.ut-table-box') && !target.closest('.dropdown-content__add')) {
//         modalWindowAdd.classList.remove('js-showw');
//     }
// })




// document.addEventListener('click', function (reportshow){
//     console.log(reportshow.target)
//     if (reportshow.target.closest('.dropdown-content__report')){
//         modalWindow.classList.remove('show');
//         modalWindowReport.classList.add('js-show');
//     }
//     document.body.classList.add('lock');
// });

// window.addEventListener('click', e => {
//     const target = e.target
//     if (!target.closest('.ut-popup-box') && !target.closest('.dropdown-content__report')) {
//         modalWindowReport.classList.remove('js-show');
//         document.body.classList.remove('lock');
//     }
// })

// btnClose.addEventListener('click', function () {

//     modalWindowReport.classList.remove('js-show');
//     document.body.classList.remove('lock');
// })

// btnNext.addEventListener('click', function () {

//     modalWindowReport.classList.remove('js-show');
//     document.body.classList.remove('lock');
// })

// inputCheck.forEach((item) => {
//     item.addEventListener('change', function () {
//         btnNext.classList.add('active')
//     })
// })
