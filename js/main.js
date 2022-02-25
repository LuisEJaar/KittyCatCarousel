//buttonfwd
document.querySelector('.fwd').addEventListener('click',fwdChange);

//buttonBck
document.querySelector('.bck').addEventListener('click',bckChange);

//nav preset 
document.querySelector('.nav1').classList.toggle("navSelected")

//Img Preset
document.querySelector(`.slide1`).style.zIndex = "1"

//navButtons
const navButtons = document.querySelectorAll('.navBtn')
for (button of navButtons) {
    button.addEventListener('click',navChange)
}

//carousel Slides
const carouselSlides =  document.querySelectorAll('.carouselSlide')

//Constants to track total number of slides and which slide is displayed
let currentSlide = 1;

//Reset Images Index
function resetZ() {
    for (slide of carouselSlides) {
        slide.style.zIndex = 0
    }
}

//array to pull slides and count:
const slidesArray = Array.from(navButtons)
const totalSlides = slidesArray.length

//Change functions

function fwdChange() {
    if (currentSlide === totalSlides){
         currentSlide = 0;
    }
    currentSlide += 1
    resetZ()
    document.querySelector(`.slide${currentSlide}`).style.zIndex = "1"
    changeNav(currentSlide)
}

function bckChange() {
    if (currentSlide === 1){
        currentSlide = totalSlides + 1;
   }
   currentSlide += - 1
   resetZ()
   document.querySelector(`.slide${currentSlide}`).style.zIndex = "1"
   changeNav(currentSlide)
}

function navChange(e) {
    currentSlide = e.target.value
    resetZ()
    document.querySelector(`.slide${currentSlide}`).style.zIndex = "1"
    changeNav(currentSlide)
}

//nav style change functions

function changeNav (slide) {
    resetNav ()
    const activeNav = document.querySelector(`.nav${slide}`)
    activeNav.classList.toggle("navSelected")
}

function resetNav () {
    for (button of navButtons) {
        button.classList.remove("navSelected")
    }
}