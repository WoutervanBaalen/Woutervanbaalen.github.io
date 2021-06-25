const button = document.querySelector(".theme-button");
let lightModeOn = JSON.parse(localStorage.getItem("lightModeOn"));
if (!lightModeOn) {
    button.textContent = "light mode"
}
const changeHandeler = function (event) {
    if (lightModeOn) {
        lightModeOn = false;
        const body = document.querySelector("body")
        body.classList.add("dark-mode")
        button.textContent = "light mode"
    } else {
        lightModeOn = true;
        const body = document.querySelector("body")
        body.classList.remove("dark-mode")
        button.textContent = "dark mode"
    }
    localStorage.setItem("lightModeOn", lightModeOn);
}
button.addEventListener("click", changeHandeler);

if (lightModeOn === false) {
    const body = document.querySelector("body")
    body.classList.add("dark-mode")
}