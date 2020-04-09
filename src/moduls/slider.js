'use strict';

const slider = (sliderClass, sliderItemClass, dots, arrows, slideCount, time) => {
    const slider = document.querySelector(sliderClass);
    const slide = slider.querySelectorAll(sliderItemClass);

    const createDots = () => {
        const ul = document.createElement('ul');
        ul.setAttribute("class", "slider-dots");
        slider.appendChild(ul);
        for (let i = 0; i < slide.length; i++) {
            const ul = slider.querySelector('.slider-dots'),
                li = document.createElement(`li`);
            if (i === 0) {
                li.setAttribute("class", "dot dot-active");
                ul.appendChild(li);
            } else {
                li.setAttribute("class", "dot");
                ul.appendChild(li);
            }
        }
    };

    const createArrows = () => {
        const btnPrev = document.createElement('a');
        const btnNext = document.createElement('a');
        btnPrev.setAttribute("class", "slider-btn prev");
        btnPrev.setAttribute("id", "arrow-left");
        slider.appendChild(btnPrev);

        btnNext.setAttribute("class", "slider-btn next");
        btnNext.setAttribute("id", "arrow-right");
        slider.appendChild(btnNext);
    };

    if (dots) { createDots(); }
    if (arrows) { createArrows(); }

    const dot = slider.querySelectorAll('.dot');

    let firstSlide = 0,
        lastSlide = slideCount,
        interval;

    const prevSlide = (elem, index, lastIndex, strClass) => {
        elem[index].classList.remove(strClass);
        if (slideCount > 1 && lastIndex !== slide.length) {
            elem[lastIndex].classList.add(strClass);
        }
    };
    const nextSlide = (elem, index, lastIndex, strClass) => {
        elem[index].classList.add(strClass);
        if (slideCount > 1 && lastIndex !== slide.length) {
            elem[lastIndex].classList.remove(strClass);
        }
    };

    const autoPlaySlide = () => {
        prevSlide(slide, firstSlide, lastSlide, 'slide-active');
        if (dots) {
            prevSlide(dot, firstSlide, lastSlide, 'dot-active');
        }

        firstSlide++;
        lastSlide++;
        if (firstSlide >= slide.length) {
            firstSlide = 0;
        }
        
        if (slideCount > 1 && lastSlide === slide.length) {
            stopSlide();
        }

        nextSlide(slide, firstSlide, lastSlide, 'slide-active');
        if (dots) {
            nextSlide(dot, firstSlide, lastSlide, 'dot-active');
        }
    };

    const startSlide = (time = 1500) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;
        if (!target.matches('.slider-btn, .dot')) {
            return;
        }

        prevSlide(slide, firstSlide, lastSlide, 'slide-active');
        if (dots) {
            prevSlide(dot, firstSlide, lastSlide, 'dot-active');
        }

        if (target.matches('#arrow-right')) {
            if (slideCount > 1) {
                lastSlide++;
            }
            firstSlide++;
        } else if (target.matches('#arrow-left')) {
            if (slideCount > 1) {
                lastSlide--;
            }
            firstSlide--;
            lastSlide++;
        } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if (elem === target) {
                    firstSlide = index;
                }
            });
        }


        if (firstSlide >= slide.length) {
            firstSlide = 0;
        }
        if (slideCount > 1 && lastSlide >= slide.length) {
            stopSlide();
        }
        if (firstSlide < 0) {
            firstSlide = slide.length - 1;
        }
        if (slideCount > 1 && firstSlide < 0) {
            stopSlide();
        }
        nextSlide(slide, firstSlide, lastSlide, 'slide-active');
        if (dots) {
            nextSlide(dot, firstSlide, lastSlide, 'dot-active');
        }
    });

    slider.addEventListener('mouseover', (event) => {
        if (event.target.matches('.slider-btn') ||
            event.target.matches('.dot')) {
            stopSlide();
        }
    });
    
    slider.addEventListener('mouseout', (event) => {
        if (event.target.matches('.slider-btn') ||
            event.target.matches('.dot')) {
            startSlide();
        }
    });

    startSlide(time);
};

export default slider;