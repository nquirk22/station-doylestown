import Swipe from './custom/swipe.js'

const track = document.querySelector('.slider-track');
const nextBtn = document.querySelector('#slider-btn-right');
const prevBtn = document.querySelector('#slider-btn-left');

nextBtn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    slideLeft();
});

prevBtn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    slideRight();
});

track.onwheel = e => {
    e.preventDefault();
    e.deltaY > 0 ? debounceLeft() : debounceRight();
}

const swiper = new Swipe(track, {
    onLeft() {
        slideLeft()
    },
    onRight() {
        slideRight()
    }
});

const animateSlide = (toMove) => {
    track.animate([
        { transform: `translateX(${ toMove }px)` },
        { transform: `translateX(0px)` }
    ], {
        duration: 300,
        iterations: 1
    });
}

const slideRight = () => {
    let currSlides = [...track.children];
    let slideWidth = currSlides[0].offsetWidth;
    track.firstChild.before(currSlides[currSlides.length - 1]);
    animateSlide(`-${ slideWidth }`);
}

const slideLeft = () => {
    let currSlides = [...track.children];
    let slideWidth = currSlides[0].offsetWidth;
    track.lastChild.after(currSlides[0]);
    animateSlide(`${ slideWidth }`);
}

const debounce = (callback, wait) => {
    let timeoutId = null;
    return () => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            callback.apply(null);
        }, wait);
    };
}

// need to have an external reference to debounce so that we
// don't create a new instance of the function each time
const debounceLeft = debounce(slideLeft, 100);
const debounceRight = debounce(slideRight, 100);


