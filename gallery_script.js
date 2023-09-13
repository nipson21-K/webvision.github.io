//image slider and image
const carouselSlide=document.querySelector(".image_slider");
const carouselImages=document.querySelectorAll(".image_slider img");

//Buttons
const prevBtn=document.querySelector("#prevBtn");
const nextBtn=document.querySelector("#nextBtn");

//counter
let counter=1;
const size=carouselImages[0].getBoundingClientRect().width;

carouselSlide.style.transform="translateX(" +(-size * counter) + "px)";

//button listener
//nextBtn listner
nextBtn.addEventListener("click", () => {
    alert("clicked")
    if(counter >=carouselImages.length-1)return; 
    carouselSlide.style.transition="transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform="translateX(" +(-size * counter) + "px)";
});

//prevBtn listener
prevBtn.addEventListener("click", () => {
    alert("clicked")
    if(counter <=0)return; 
    carouselSlide.style.transition="transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform="translateX(" +(-size * counter) + "px)";
});

//for last image and first image
carouselSlide.addEventListener("transitionend", ()=>{

     if(carouselImages[counter].id=== "lastClone"){
        carouselSlide.style.transition="none";
        counter=carouselImages.length-2; 
        carouselSlide.style.transform="translateX(" +(-size * counter) + "px)";
     };

     if(carouselImages[counter].id=== "firstClone"){
        carouselSlide.style.transition="none";
        counter=carouselImages.length-counter; 
        carouselSlide.style.transform="translateX(" +(-size * counter) + "px)";
     };


});