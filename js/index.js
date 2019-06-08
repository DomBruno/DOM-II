// Objects
const headerImg= document.querySelector("header img");
const introH = document.querySelector("header h2");
const hiddenP = document.createElement("p");
    hiddenP.textContent = "Silly wabbit, Trix are for kids!";
    hiddenP.style.fontSize = "50px";
const sectionHeaders = document.querySelectorAll(".text-content h2");
const sectionContent = document.querySelectorAll(".text-content p");
const links = document.querySelectorAll(".nav-link");
const navBlocker = document.querySelector("nav");
const destinSection = document.querySelector(".content-destination");
const destinDiv = document.querySelector(".destination");


//Events
headerImg.addEventListener('dblclick', (event) => {headerImg.style.display = "none"; introH.prepend(hiddenP);})
//removes headerImg and replaces with easter egg text in hiddenP

sectionHeaders[0].addEventListener('mouseover', (event) => {sectionContent[0].style.color = "red"; sectionContent[1].style.color = "red"});
sectionHeaders[1].addEventListener('mouseover', (event) => {sectionContent[2].style.color = "purple"; sectionContent[3].style.color = "purple"});
//turns text of associatedp elemnts red or purple on mouseover of header

sectionHeaders[0].addEventListener('mouseout', (event) => {sectionContent[0].style.color = "purple"; sectionContent[1].style.color = "purple"});
sectionHeaders[1].addEventListener('mouseout', (event) => {sectionContent[2].style.color = "red"; sectionContent[3].style.color = "red"});
//inverts the above color scheme on mouseout

links[0].addEventListener('focus', (event) => {links[0].style.fontSize = "30px"});
links[1].addEventListener('focus', (event) => {links[1].style.fontSize = "30px"});
links[2].addEventListener('focus', (event) => {links[2].style.fontSize = "30px"});
links[3].addEventListener('focus', (event) => {links[3].style.fontSize = "30px"});
//highlights link text on focus

links[0].addEventListener('blur', (event) => {links[0].style.fontSize = "1.6rem"});
links[1].addEventListener('blur', (event) => {links[1].style.fontSize = "1.6rem"});
links[2].addEventListener('blur', (event) => {links[2].style.fontSize = "1.6rem"});
links[3].addEventListener('blur', (event) => {links[3].style.fontSize = "1.6rem"});
//shrinks them to normal on blur

navBlocker.addEventListener('click', (event) => {
    event.preventDefault();})
// prevent nav links from refreshing page

destinSection.addEventListener('mouseover', (event) => {
    destinSection.style.display = 'flex';
    event.stopPropagation;
})

