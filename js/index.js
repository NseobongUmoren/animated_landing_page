'use strict';


const heroBgImg = document.querySelector('.banner-img');
const welcomeNote = document.querySelector('.welcome-note')
const heroNote1 = document.querySelector('.welcome-note .note-1');
const heroNote2 = document.querySelector('.welcome-note .note-2');
const heroNote3 = document.querySelector('.welcome-note .note-3');
const otherNote = document.querySelector('.other-note');
let items = document.querySelectorAll('.items');
const footer = document.querySelector('.footer');

heroNote1.classList.remove('show-note-1');
heroNote2.classList.remove('show-note-2');
heroNote3.classList.remove('show-note-3');
otherNote.classList.remove('show-other-note');
for (let i = 0; i < items.length; i++) {
  items[i].classList.remove('show-items');
}
footer.classList.remove('show-footer');

document.addEventListener('DOMContentLoaded', animateLandingPage);

function loadSlides() {
  let slideIndex = 0;
  let i;
  let slides = document.querySelectorAll(".slides");
  let slideTexts = document.querySelectorAll(".slide-text");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = slideTexts[i].style.display = "none";
  }
  let showSlides = () => {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = slideTexts[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }

    slides[slideIndex - 1].style.display = slideTexts[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 12000);
  }
  setTimeout(showSlides, 24000);
}

function animateLandingPage() {
  loadSlides();

  heroNote1.classList.add('show-note-1');
  heroNote2.classList.add('show-note-2');
  heroNote3.classList.add('show-note-3');
  otherNote.classList.add('show-other-note');
  for (let i = 0; i < items.length; i++) {
    items[i].classList.add('show-items');
  }
  footer.classList.add('show-footer');
}