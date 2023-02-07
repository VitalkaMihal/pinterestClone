export const searchPin = (searchForm, cardSmall, cardMedium, cardLarge) => {
    for (let item of cardSmall){
        if (item.querySelector('.bottom-bar__link-web').textContent.toUpperCase().indexOf(searchForm.value.toUpperCase()) === -1){
            item.style.display = "none";
        } else {item.style.display = "flex";};
    };

    for (let item of cardMedium){
        if (item.querySelector('.bottom-bar__link-web').textContent.toUpperCase().indexOf(searchForm.value.toUpperCase()) === -1){
            item.style.display = "none";
        } else {item.style.display = "flex";};
    };

    for (let item of cardLarge){
        if (item.querySelector('.bottom-bar__link-web').textContent.toUpperCase().indexOf(searchForm.value.toUpperCase()) === -1){
            item.style.display = "none";
        } else {item.style.display = "flex";};
    };
};