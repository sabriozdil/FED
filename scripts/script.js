// JavaScript Document
console.log("hi");

//hele li clickbaar maken, BRON:ChatGPT

// selecteert alle li elementen binnen de ul
const listItems = document.querySelectorAll(".lijst li");

// alle li's doorlopen en eventlistener voor click toevoegen 
listItems.forEach((item) => {
    item.addEventListener("click", () => {
        // 'a' vinden binnen de geclickte li
        const link = item.querySelector("a");
        // click simuleren op de a
        link.click();
    });
});



// Hamburger menu BRON: https://codepen.io/shooft/pen/MWZYoqa

/* menu openen de MENU button */
// stap 1: zoek de menu-button op en sla die op in een variabele
var openButton = document.querySelector("header > button");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.onclick = openMenu;

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {
    // zoek de nav op
    var deNav = document.querySelector("nav");
    // voeg class toe aan nav
    deNav.classList.add("toonMenu");
}

/* menu sluiten met de sluit button */ 
// zoek sluiten button op
var sluitButton = document.querySelector("nav button");

// laat die button luisteren naar kliks
sluitButton.onclick = sluitMenu;

// in de functie verwijder de class van de nav
function sluitMenu() {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
}


//zoekbalk laten verschijnen BRON:https://codepen.io/shooft/pen/JjxmvrL

// zoeken knop
const zoekButton = document.querySelector(".search");
const zoekSection = document.querySelector("header > form");

zoekButton.onclick = toggleSearch;

function toggleSearch() {
    zoekSection.classList.toggle("open");
}
