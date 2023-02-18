// let activeSlideNumber = 0;

let leftArrow = document.querySelector("#left-arrow");
let rightArrow = document.querySelector("#right-arrow");

// let dot1 = document.querySelector("#dot1");
// let dot2 = document.querySelector("#dot2");
// let dot3 = document.querySelector("#dot3");

// let slide1 = document.querySelector("#slide1");
// let slide2 = document.querySelector("#slide2");
// let slide3 = document.querySelector("#slide3");

let hideActiveDot = () => {
    let activeElementDot = document.querySelector(".act");
    activeElementDot.classList.remove("act");
}

let hideActiveSlide = () => {
    let activeElement = document.querySelector(".active");
    activeElement.classList.remove("active");
};

let showSlide = (slideNumber) => {
    hideActiveSlide();
    hideActiveDot();
    document.querySelector("#slide" + slideNumber).classList.add("active");
    document.querySelector("#dot" + slideNumber).classList.add("act");
    activeSlideNumber = slideNumber;
};


// let showSlide1 = () => {
//     showSlide(1);
// };

// let showSlide2 = () => {
//     showSlide(2);
// };

// let showSlide3 = () => {
//     showSlide(3);
// };

let showNextSlide = () => {
   if(activeSlideNumber === 3){
        activeSlideNumber = 1;
   }
   else{
    activeSlideNumber++;
   }
   showSlide(activeSlideNumber);

};

let showpreviusSlide = () => {
    if(activeSlideNumber === 1){
        activeSlideNumber = 3;
   }
   else{
    activeSlideNumber--;
   }
   showSlide(activeSlideNumber);

}

for(let i=1; i<=3; i++){
    let showSlideI = () => {
        activeSlideNumber = i;
        showSlide(i);
    };
    document.querySelector('#dot'+i).addEventListener("click", showSlideI);

}

// dot1.addEventListener("click", showSlide1);
// dot2.addEventListener("click", showSlide2);
// dot3.addEventListener("click", showSlide3);

leftArrow.addEventListener("click", showpreviusSlide);
rightArrow.addEventListener("click", showNextSlide);




