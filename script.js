const menuOpenButton = document.querySelector("#menuOpenButton");
const menuCloseButton = document.querySelector("#menuCloseButton");



    //Toggle Mobile menu

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("showMobileMenu")
});

menuCloseButton.addEventListener("click", () => {
    document.body.classList.toggle("showMobileMenu")
});