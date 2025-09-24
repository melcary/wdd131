const year = document.querySelector("#currentyear");
const today = new Date();
year.textContent = today.getFullYear();
document.querySelector("#lastModified").textContent = "Last modified: " + document.lastModified;

const mainnav = document.querySelector('.main-nav')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});
