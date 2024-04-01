// Nav
const menuBtn = document.querySelector('.fa-bars')
const xmark = document.querySelector('.xmark');
const responsiveNav = document.querySelector('.responsive-nav-section');
const navFilter = document.querySelector('.nav-filter');
const body = document.querySelector('body');

menuBtn.addEventListener('click', function(menu){
    menuBtn.style.display = 'none';
    responsiveNav.style.transform = 'translateX(0vw)';
    navFilter.style.cssText = 'z-index: 1; opacity: .7;';
    body.style.overflow = 'hidden';
})

xmark.addEventListener('click', function(xmark){
    menuBtn.style.display = 'flex';
    responsiveNav.style.transform = 'translateX(-100vw)';
    navFilter.style.cssText = 'z-index: -1; opacity: 0;';
})


const searchBtn = document.querySelector('.search-input');
const glassBtn = document.querySelector('.fa-magnifying-glass');
const search = document.querySelector('.search');
const closeBtn = document.querySelector('.close')
const circleXmark = document.querySelector('.fa-circle-xmark');
const searchSection = document.querySelector('.search-section');
glassBtn.addEventListener('click', function(e){
    let screenWidth = window.innerWidth;
    if(screenWidth < 1024){
        glassBtn.style.cssText = 'position: absolute; top: 20px; left: 7vw;';
        searchBtn.style.display = 'inline-block';
        searchBtn.placeholder = 'Wordpress plugin';
        search.style.cssText = 'position: absolute; background-color: #fff; width: 100%; heigth: 100%;';
        
        closeBtn.style.display = 'inline-block'
        searchSection.style.transform = 'translateX(0vw)';
        console.log('test')
    }
});
searchBtn.addEventListener("input", function(){
    const inputWidth = searchBtn.offsetWidth;
    if (searchBtn.value.trim() !== '') {
        circleXmark.classList.add('active');
      } else {
        circleXmark.classList.remove('active');
      }
});

circleXmark.addEventListener('click', function(xmark){
    searchBtn.value = '';
    circleXmark.classList.remove('active');
});

closeBtn.addEventListener('click', function(close){
    glassBtn.style.cssText = 'position: statick;';
    circleXmark.style.display = 'none';
    closeBtn.style.display = 'none';
    searchBtn.style.display = 'none';
    search.style.cssText = 'position: statick; background-color: tranparent; width: initial; heigth: initial;';
    searchSection.style.transform = 'translateX(-100vw)';
});



const navBuyBtn = document.querySelector('.nav-buy-btn');
var screenWidth = window.innerWidth;
if (screenWidth >= 1024) {
    const icon = document.createElement("i");
    icon.style.marginLeft = "10px";
    icon.className = "fa-solid fa-angle-right"; 
    navBuyBtn.appendChild(icon);
};


// Testiomonials

const slides = document.querySelectorAll('.testiomonials-slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
console.log(slides);
const nextSlide = () => {
    const activeSlide = document.querySelector(".active");
    activeSlide.classList.remove('active');
    if(activeSlide.nextElementSibling){
        activeSlide.nextElementSibling.classList.add('active');
    }else{
        slides[0].classList.add('active');
    }
}

const prevSlide = () => {
    const activeSlide = document.querySelector(".active");
    activeSlide.classList.remove('active');
    if(activeSlide.previousElementSibling){
        activeSlide.previousElementSibling.classList.add('active');
    }else{
        slides[slides.length - 1].classList.add('active');

    }
};

next.addEventListener('click', function(){
    nextSlide();
});

prev.addEventListener('click', function(){
    prevSlide();
});



//FAQ
const faqSections = document.querySelectorAll('.faq-text-section');
const answers = document.querySelectorAll('.faq-answer');
const arrows = document.querySelectorAll('.arrow-down');
faqSections.forEach((section) => {
    const arrow = section.querySelector('.arrow-down');
    const answer = section.querySelector('.faq-answer');
    arrow.addEventListener('click', () => {
        if (arrow.classList.contains('active')) { closeAllAnswers() } else {
            closeAllAnswers();
            arrow.classList.add('active');
            answer.classList.add('show');
            console.log('test')
        }
    });
});
const closeAllAnswers = () => {
    arrows.forEach(arrow => {
        arrow.classList.remove('active')
    })
    answers.forEach(answer => {
        answer.classList.remove('show')
    })
}





