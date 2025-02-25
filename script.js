const menuOpenButton = document.querySelector("#menuOpenButton");


    //Toggle Mobile menu

menuOpenButton.addEventListener("onClick", () => {
    document.body.classList.toggle("showMobileMenu")
});