const images = ["images/dog.svg", "images/bird.svg", "images/cat.svg"];

// Открытие картинки во всплывающем окне
images.forEach(el => {
    const img = document.createElement("div");
    img.className = "mini__item";
    img.style.backgroundImage = `url(${el})`;
    img.addEventListener("click", e => 
        showPopup(`<img alt="pic" src="${el}">`)
    )
    document.body.append(img);
})

const popup = document.querySelector(".popup");
const popupContent = popup.firstElementChild;
const popupClose = popup.lastElementChild;
const lightBox = document.querySelector(".lightbox")

// Закрытие всплывающего окна, отключение затенения
const closePopup = function(e) {
    e.target.parentElement.classList.remove("popup_active");
    lightBox.classList.remove("lightbox_active")
}

// Открытие всплывающего окна, затенение остального экрана
const showPopup = function(text) {
    popup.classList.add("popup_active");
    lightBox.classList.add("lightbox_active")
    popupContent.innerHTML = text;
}

popupClose.addEventListener("click", closePopup)

// Event на нажатие "Escape" и сочетания клавиш "Alt+F4"
document.addEventListener("keydown", function(event){
    if (event.code === "Escape" || (event.code === "F4" && event.altKey)) { // Alt+F4 отказывается работать
        event.preventDefault();
        document.querySelector(".popup_active").classList.remove("popup_active")
        lightBox.classList.remove("lightbox_active")
    }
})

// Закрытие popup при нажатии вне
lightBox.addEventListener("click", function(event) {
    document.querySelector(".popup_active").classList.remove("popup_active")
    lightBox.classList.remove("lightbox_active")
})

// hw1 link(git)
/* 
    1) При нажатии на поле вне картинки закрывать popup
    2) Предусмотреть возможность закрытия окошка по нажатию на кнопки:
        (keyup/keydown)
        1. Esc
        2. Alt+F4 (preventDefault)
    3) Сделать интерфейс в виде lightbox - все элементы за popup становятся затенёнными
*/