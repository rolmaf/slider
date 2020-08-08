let countSlide = 1;
function plusSlides(params) {
    document.querySelector(".active-slide").classList.remove("active-slide");
    if (params === 1) {
        countSlide++;
    } else {
        countSlide--;
    };

    if (countSlide === 5) {
        countSlide = 1;
    } else if (countSlide === 0) {
        countSlide = 4;
    };

    if (countSlide === 1) {
        document.querySelector(".slide-1").classList.add("active-slide");
    } else if (countSlide === 2) {
        document.querySelector(".slide-2").classList.add("active-slide");
    } else if (countSlide === 3) {
        document.querySelector(".slide-3").classList.add("active-slide");
    } else if (countSlide === 4) {
        document.querySelector(".slide-4").classList.add("active-slide");
    };

    dot();
};

function curentSlide(params) {
    document.querySelector(".active-slide").classList.remove("active-slide");
    if (params === 1) {
        document.querySelector(".slide-1").classList.add("active-slide");
        countSlide = 1;
    } else if (params === 2) {
        document.querySelector(".slide-2").classList.add("active-slide");
        countSlide = 2;
    } else if (params === 3) {
        document.querySelector(".slide-3").classList.add("active-slide");
        countSlide= 3;
    } else if (params === 4) {
        document.querySelector(".slide-4").classList.add("active-slide");
        countSlide = 4;
    };

    dot();
};

function dot() {
    document.querySelector(".active-dot").classList.remove("active-dot");
    if (countSlide === 1) {
        document.querySelector(".dot-1").classList.add("active-dot");        
    } else if (countSlide === 2) {
        document.querySelector(".dot-2").classList.add("active-dot");
    } else if (countSlide === 3) {
        document.querySelector(".dot-3").classList.add("active-dot");
    } else if (countSlide === 4) {
        document.querySelector(".dot-4").classList.add("active-dot");
    };
};