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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Arequipa Peru",
    location: "Arequipa Peru",
    dedicated: "2019, December, 15",
    area: 26969,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7276.jpg"
  },
  {  
    templeName: "Tokyo Japan",
    location: "Tokyo Japan",
    dedicated: "1980, October, 27-29",
    area: 53997,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-25746.jpg"
  },
  {  
    templeName: "Hamilton New Zealand",
    location: "Hamilton New Zealand",
    dedicated: "1958, April, 20-22",
    area: 45251,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hamilton-new-zealand-temple/hamilton-new-zealand-temple-31317.jpg"
  },
];

const container = document.getElementById("temples-container");

function displayTemples(list) {
  container.innerHTML = "";
  list.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    <img src="${temple.imageUrl}" 
         alt="${temple.templeName}" 
         loading="lazy">
  `;
    container.appendChild(card);
  });
}
displayTemples(temples);

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const option = e.target.textContent;

    let filtered = temples;
    if (option === "Old") {
      filtered = temples.filter(
        (t) => parseInt(t.dedicated.split(",")[0]) < 1900
      );
    } else if (option === "New") {
      filtered = temples.filter(
        (t) => parseInt(t.dedicated.split(",")[0]) > 2000
      );
    } else if (option === "Large") {
      filtered = temples.filter((t) => t.area > 90000);
    } else if (option === "Small") {
      filtered = temples.filter((t) => t.area < 10000);
    } else if (option === "Home") {
      filtered = temples; 
    }
    document.querySelector("main h1").textContent = option;
    displayTemples(filtered);
  });
});