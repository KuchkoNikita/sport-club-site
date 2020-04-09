'use strict';

const sliderCarusel = (sliderClass, sliderItemClass, arrows, slideCount, time) => {
    const slider = document.querySelector(sliderClass);
    const slide = slider.querySelectorAll(sliderItemClass);
    const sliderBlock = slider.querySelector('.slider-block');
    let interval;
    
    const createArrows = () => {
        const btnPrev = document.createElement(`a`),
            btnNext = document.createElement(`a`);
        btnPrev.setAttribute("class", "slider-btn prev");
        btnPrev.setAttribute("id", "arrow-left");
        slider.appendChild(btnPrev);

        btnNext.setAttribute("class", "slider-btn next");
        btnNext.setAttribute("id", "arrow-right");
        slider.appendChild(btnNext);
    };    
    if (arrows) { createArrows(); }

    const buildSlider = () => {
        const sliders = sliderBlock.querySelectorAll('.slide');
        sliders.forEach(item => {
            item.classList.remove('slide-active');
        });

        for (let i = 0; i < slideCount; i++) {
            sliders[i].classList.add(`slide-active`);
        }
    };

    const nextSlide = () => {
        const last = sliderBlock.lastElementChild;
        const lastClone = last.cloneNode(true); 
        sliderBlock.insertAdjacentElement(`afterbegin`, lastClone);
        last.parentNode.removeChild(last);
    };

    const prevSlide = () => {
        const first = sliderBlock.firstElementChild;
        const firstClone = first.cloneNode(true); 
        sliderBlock.insertAdjacentElement(`afterbegin`, firstClone);
        first.parentNode.removeChild(first);
    };

    const moveSliders = (str) => {
        if (str === 'next') { nextSlide(); }
        else if (str === 'prev') { prevSlide(); }
        buildSlider();
    };

    const autoPlaySlide = () => {
        moveSliders('next');
    };

    const startSlide = (time = 1500) => {
        interval = setInterval(autoPlaySlide, time);
    };
    startSlide(time);

    const stopSlide = () => {
        clearInterval(interval);
    };

    const mouseTracking = (event, callback) => {
        if (event.target.matches(`.slider-btn`) || event.target.matches(`.dot`)) { callback(); } 
    };

    slider.addEventListener('mouseover', (event) => {
        mouseTracking(event, stopSlide);
    });
    
    slider.addEventListener('mouseout', (event) => {
        mouseTracking(event, startSlide);
    });

    const nextArrow = slider.querySelector('.next');
    const prevArrow = slider.querySelector('.prev');

    nextArrow.addEventListener('click', (event) => {
        event.preventDefault();
        moveSliders('next');
    });
    prevArrow.addEventListener('click', (event) => {
        event.preventDefault();
        moveSliders('prev');
    });
};

export default sliderCarusel;