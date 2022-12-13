let slides = document.getElementsByClassName("slider__slide");
let navlinks = document.getElementsByClassName("slider__navlink");
let currentSlide = 0;

document.getElementById("nav-button--next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("nav-button--prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
    
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}

document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})

//////////////////////////////////////////////////////////////////////////////// 

let slides2 = document.getElementsByClassName("slider__slide2");
let navlinks2 = document.getElementsByClassName("slider__navlink2");
let currentSlide2 = 0;

document.getElementById("nav-button--next2").addEventListener("click", () => {
    changeSlide2(currentSlide2 + 1)
});
document.getElementById("nav-button--prev2").addEventListener("click", () => {
    changeSlide2(currentSlide2 - 1)
});

function changeSlide2(moveTo) {
    if (moveTo >= slides2.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides2.length - 1;}
    
    slides2[currentSlide2].classList.toggle("active");
    navlinks2[currentSlide2].classList.toggle("active");
    slides2[moveTo].classList.toggle("active");
    navlinks2[moveTo].classList.toggle("active");
    
    currentSlide2 = moveTo;
}

document.querySelectorAll('.slider__navlink2').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide2 !== bulletIndex) {
            changeSlide2(bulletIndex);
        }
    })
})

//////////////////////////////////////////////////////////////////////////////// 

let slides3 = document.getElementsByClassName("slider__slide3");
let navlinks3 = document.getElementsByClassName("slider__navlink3");
let currentSlide3 = 0;

document.getElementById("nav-button--next3").addEventListener("click", () => {
    changeSlide3(currentSlide3 + 1)
});
document.getElementById("nav-button--prev3").addEventListener("click", () => {
    changeSlide3(currentSlide3 - 1)
});

function changeSlide3(moveTo) {
    if (moveTo >= slides3.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides3.length - 1;}
    
    slides3[currentSlide3].classList.toggle("active");
    navlinks3[currentSlide3].classList.toggle("active");
    slides3[moveTo].classList.toggle("active");
    navlinks3[moveTo].classList.toggle("active");
    
    currentSlide3 = moveTo;
}

document.querySelectorAll('.slider__navlink3').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide3 !== bulletIndex) {
            changeSlide3(bulletIndex);
        }
    })
})

//////////////////////////////////////////////////////////////////////////////// 

let slides4 = document.getElementsByClassName("slider__slide4");
let navlinks4 = document.getElementsByClassName("slider__navlink4");
let currentSlide4 = 0;

document.getElementById("nav-button--next4").addEventListener("click", () => {
    changeSlide4(currentSlide4 + 1)
});
document.getElementById("nav-button--prev4").addEventListener("click", () => {
    changeSlide4(currentSlide4 - 1)
});

function changeSlide4(moveTo) {
    if (moveTo >= slides4.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides4.length - 1;}
    
    slides4[currentSlide4].classList.toggle("active");
    navlinks4[currentSlide4].classList.toggle("active");
    slides4[moveTo].classList.toggle("active");
    navlinks4[moveTo].classList.toggle("active");
    
    currentSlide4 = moveTo;
}

document.querySelectorAll('.slider__navlink4').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide4 !== bulletIndex) {
            changeSlide4(bulletIndex);
        }
    })
})

//////////////////////////////////////////////////////////////////////////////// 

let slides5 = document.getElementsByClassName("slider__slide5");
let navlinks5 = document.getElementsByClassName("slider__navlink5");
let currentSlide5 = 0;

document.getElementById("nav-button--next5").addEventListener("click", () => {
    changeSlide5(currentSlide5 + 1)
});
document.getElementById("nav-button--prev5").addEventListener("click", () => {
    changeSlide5(currentSlide5 - 1)
});

function changeSlide5(moveTo) {
    if (moveTo >= slides5.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides5.length - 1;}
    
    slides5[currentSlide5].classList.toggle("active");
    navlinks5[currentSlide5].classList.toggle("active");
    slides5[moveTo].classList.toggle("active");
    navlinks5[moveTo].classList.toggle("active");
    
    currentSlide5 = moveTo;
}

document.querySelectorAll('.slider__navlink5').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide5 !== bulletIndex) {
            changeSlide5(bulletIndex);
        }
    })
})