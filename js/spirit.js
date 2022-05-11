const carsouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

//buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carsouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners

nextBtn.addEventListener('click', ()=>{
    if (counter >= carouselImages.length -1) return;
    carsouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carsouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', ()=>{
    if (counter <= 0) return;
    carsouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carsouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

carsouselSlide.addEventListener('transitionend', ()=>{
    if (carouselImages[counter].id === 'lastClone'){
        carsouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carsouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone'){
        carsouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carsouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})