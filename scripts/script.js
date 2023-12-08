// JavaScript Document
console.log("hi");


const zoekButton = document.querySelector("header > button");
const zoekSection = document.querySelector("header > search");

zoekButton.onclick = toggleSearch;

function toggleSearch() {
	zoekSection.classList.toggle("open");
}