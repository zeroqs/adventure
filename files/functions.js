export function menuBurger () { 
    const burgerMenu = document.querySelector('.menu__icon'); 
    if (burgerMenu) { 
        const navMenu = document.querySelector('.header__menu-main');  
        burgerMenu.addEventListener("click", function(e) {
            document.body.classList.toggle('_lock');
            burgerMenu.classList.toggle('_active');
            navMenu.classList.toggle('_active');
        })   
    }
}
export function slider () {
    const carouselSlide = document.querySelector(".carousel-slide");
    const carouselImages = document.querySelectorAll(".carousel-slide img");
    

    // buttons
    const nextButton = document.querySelector("#nextBtn");
    const prevButton = document.querySelector("#prevBtn");

    //counter
    let counter = 1; // first image start
    const size = carouselImages[counter].clientWidth; // дистанция перемещения одного слайда  
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;

    nextButton.addEventListener("click", () => {
        if (counter >= carouselImages.length - 1) return;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    });
    prevButton.addEventListener("click", () => {
        if (counter <= 0) return; 
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    });
    
    carouselSlide.addEventListener('transitionend', ()=> {
        if(carouselImages[counter].id ==='lastClone') {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - 2;
            carouselSlide.style.transform = `translateX(${-size * counter}px)`;
        }
        if(carouselImages[counter].id ==='firstClone') {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = `translateX(${-size * counter}px)`;
        }
    })
}


