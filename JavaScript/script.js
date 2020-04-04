'use strict';

let deleteMessage;
let closePopupAfterSendForm;
let thanksPopup;
let sorryPopup;

const popup = () => {
    const inputСleaning = (block) => {
        const inputs = block.querySelectorAll('input');
        inputs.forEach((item) => {
            if (!item.classList.contains('card-type') && !item.classList.contains('type-club')) {
                item.value = '';
            }
            if (item.classList.contains('checkbox-dinamic')) {
                item.checked = false;
            }
        });
    };

    deleteMessage = (message, time = 5000) => {
        setTimeout(() => {
            message.remove();
        }, time);
    };

    closePopupAfterSendForm = (form, time = 5000) => {
        const popup = form.closest('.popup');
        setTimeout(() => {
            popup.style.display = 'none';
            inputСleaning(form);
        }, time);
    };

    const openingBlock = (button, block, captureContent) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            let count = -20;
            block.style.display = 'block';
            captureContent.style.top = '100%';

            const animationBlock = () => {
                count++;
                captureContent.style.top = count + "%";
                if (count < 20) {
                    requestAnimationFrame(animationBlock);
                }
            };

            requestAnimationFrame(animationBlock);
            //document.querySelector('.fixed-gift').style.display = 'none';
        });

    };

    const closingBlock = (button, block, captureContent) => {
        block.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains(button)) {
                block.style.display = 'none';
                inputСleaning(block);
            } else {
                target = target.closest(captureContent);

                if (!target) {
                    block.style.display = 'none';
                    inputСleaning(block);
                }
            }
            // document.querySelector('.fixed-gift').style.display = 'block';
        });
    };

    const openingThanksOrSorryPopup = (block, captureContent) => {
        let count = -20;
        block.style.display = 'block';
        captureContent.style.top = '100%';

        const animationBlock = () => {
            count++;
            captureContent.style.top = count + "%";
            if (count < 20) {
                requestAnimationFrame(animationBlock);
            }
        };

        requestAnimationFrame(animationBlock);
        //document.querySelector('.fixed-gift').style.display = 'none';
    };

    const clubsPopup = () => {
        const clubsBody = document.querySelector('.clubs-body');
        const clubsList = document.querySelector('.clubs-list');

        clubsList.addEventListener('click', () => {
            clubsBody.style.display = (clubsBody.style.display !== 'block') ? 'block' : 'none';
        });
    };
    clubsPopup();

    const freeVisitFormPopup = () => {
        const openPopup = document.querySelector('.open-popup');
        const freeVisitForm = document.querySelector('#free_visit_form');
        const formContent = freeVisitForm.querySelector('.form-content');

        openingBlock(openPopup, freeVisitForm, formContent);
        closingBlock('close_icon', freeVisitForm, '.form-content');
    };
    freeVisitFormPopup();

    const callbackFormPopup = () => {
        const callbackBtn = document.querySelector('.callback-btn');
        const callbackForm = document.querySelector('#callback_form');
        const formContent = callbackForm.querySelector('.form-content');

        openingBlock(callbackBtn, callbackForm, formContent);
        closingBlock('close_icon', callbackForm, '.form-content');
    };
    callbackFormPopup();

    const giftPopup = () => {
        const fixedGift = document.querySelector('.fixed-gift');
        const gift = document.querySelector('#gift');
        const formContent = gift.querySelector('.form-content');

        openingBlock(fixedGift, gift, formContent);
        closingBlock('close-btn', gift, '.form-content');

        fixedGift.addEventListener('click', () => {
            fixedGift.style.display = 'none';
        });
    };
    giftPopup();

    const menuButton = () => {
        const menuButton = document.querySelector('.menu-button');
        const popupMenu = document.querySelector('.popup-menu');
        const closeMenuBtn = document.querySelector('.close-menu-btn');
        const link = popupMenu.querySelectorAll('a');

        menuButton.addEventListener('click', () => {
            popupMenu.style.display = 'block';
        });
        closeMenuBtn.addEventListener('click', () => {
            popupMenu.style.display = 'none';
        });

        link.forEach(item => {
            item.addEventListener('click', () => {
                popupMenu.style.display = 'none';
            });
        });
    };
    menuButton();

    thanksPopup = () => {
        const thanks = document.querySelector('#thanks');
        const formContent = thanks.querySelector('.form-content');

        openingThanksOrSorryPopup(thanks, formContent);
        closingBlock('close-btn', thanks, '.form-content');

        thanks.style.display = 'block';

    };

    sorryPopup = () => {
        const sorry = document.querySelector('#sorry');
        const formContent = sorry.querySelector('.form-content');

        openingThanksOrSorryPopup(sorry, formContent);
        closingBlock('close-btn', sorry, '.form-content');

        sorry.style.display = 'block';
    };

    /* forms */
    const bannerForm = () => {
        const bannerForm = document.querySelector('#banner-form');

        bannerForm.addEventListener('submit', () => {
            setTimeout(() => {
                inputСleaning(bannerForm);
            }, 5000);
        });
    };
    bannerForm();

    const cardOrder = () => {
        const cardOrder = document.querySelector('#card_order');

        cardOrder.addEventListener('submit', () => {
            setTimeout(() => {
                inputСleaning(cardOrder);
            }, 5000);
        });
    };
    cardOrder();

    const footerForm = () => {
        const footerForm = document.querySelector('#footer_form');

        footerForm.addEventListener('submit', () => {
            setTimeout(() => {
                inputСleaning(footerForm);
            }, 5000);
        });
    };
    footerForm();
};
popup();

const calculator = () => {
    const priceTotal = document.querySelector('#price-total');
    const cardType = document.querySelectorAll('.card-type');
    const inputCode = document.querySelector('.input-code');
    const inputName = document.querySelector('.input-name');
    const inputPhone = document.querySelector('.input-phone');
    const cardCheck = document.querySelector('#card_check');
    const typeClub = document.querySelectorAll('.type-club');
    const cardOrder = document.querySelector('#card_order');

    const subscription = {
        price: '',
        card: '',
        code: '',
        name: '',
        phone: '',
        club: '',
        licenz: false,
    };

    const subscriptionAssignment = () => {
        cardType.forEach((item) => {
            if (item.checked) {
                subscription.card = item.value;
            }
        });

        typeClub.forEach((item) => {
            if (item.checked) {
                subscription.club = item.value;
            }
        });

        subscription.licenz = cardCheck.checked;
        subscription.code = inputCode.value;
        subscription.name = inputName.value;
        subscription.phone = inputPhone.value;
    };

    const dataСounting = () => {
        let coast = 0;
        let discount = 1;
        const dataSelection = () => {
            if (subscription.club === 'mozaika') {
                const oneMonth = 1999,
                    sixMonths = 9900,
                    nineMonth = 13900,
                    twelveMonths = 19900;
                coast = (subscription.card === '1') ? oneMonth : (subscription.card === '6') ?
                    sixMonths : (subscription.card === '9') ?
                    nineMonth : (subscription.card === '12') ?
                    twelveMonths : '';
            } else if (subscription.club === 'schelkovo') {
                const oneMonth = 2999,
                    sixMonths = 14900,
                    nineMonth = 21990,
                    twelveMonths = 24990;
                coast = (subscription.card === '1') ? oneMonth : (subscription.card === '6') ?
                    sixMonths : (subscription.card === '9') ?
                    nineMonth : (subscription.card === '12') ?
                    twelveMonths : '';
            }

            if (subscription.code === 'ТЕЛО2020') {
                discount = 0.3 * coast;
            } else {
                discount = '';
            }
        };

        const dataOutput = () => {
            priceTotal.textContent = Math.floor(coast - discount);
        };

        dataSelection();
        dataOutput();
    };

    subscriptionAssignment();
    dataСounting();
    cardOrder.addEventListener('change', () => {
        subscriptionAssignment();
        dataСounting();
    });

};
calculator();


const animationLinks = () => {
    const animation = (button, className, navigation = false) => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            let target = event.target;

            if (navigation) {
                if( target.classList.contains('scroll') ) { target = event.target.firstChild; }
            } else {
                if (target.id !== className) { target = event.target.parentElement; }   
            }
    
            const blockID = target.getAttribute('href').substr(1);
    
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };
    
    const arrow = () => {
        const totop = document.querySelector('#totop');
        totop.style.display = 'none';
    
        window.addEventListener('scroll', function () {
            if (window.pageYOffset >= 700) {
                totop.style.display = 'block';
            } else {
                totop.style.display = 'none';
            }
        });

        animation(totop, 'totop', false);
    };
    arrow();
    
    const navigationAnimate = () => {
        const scroll = document.querySelectorAll('.scroll');
        scroll.forEach((item) => {
            animation(item, 'scroll', true);
        });
    };
    navigationAnimate();
};
animationLinks();

const menuBlock = () => {
    const topMenu = document.querySelector('.top-menu');


    window.addEventListener('scroll', function () {
        if (document.body.clientWidth < 767) {
            if (window.pageYOffset >= 188) {
                topMenu.classList.add('active-menu-block');
            } else {
                topMenu.classList.remove('active-menu-block');
            }
        } else {
            if (topMenu.classList.contains('active-menu-block')) {
                topMenu.classList.remove('active-menu-block');
            }
        }
    });
};
menuBlock();

const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...';
    const loadMessage = 'Загрузка...';
    const successMessage = 'Спасибо! Мы скоро с вами свяжемся';

    const popupForm = document.querySelectorAll('.popup-form');
    const staticForm = document.querySelectorAll('.static-form');

    const statusMassage = document.createElement('div');
    statusMassage.style.cssText = 'font-size: 2rem;';

    const postData = (obj) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj),
        });
    };

    const messagePost = (form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMassage);
            if (form.classList.contains('popup-form')) {
                statusMassage.textContent = loadMessage;
            }

            let body = {};
            if (form.id === 'card_order') {
                body = {
                    coast: document.querySelector('#price-total').textContent
                };
            }
            const formData = new FormData(form);
            formData.forEach((value, key) => {
                if (key !== 'form_name') {
                    body[key] = value;
                }
            });

            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }

                    if (form.classList.contains('static-form')) {
                        thanksPopup();
                    } else {
                        statusMassage.textContent = successMessage;
                    }
                })
                .catch((error) => {
                    if (form.classList.contains('static-form')) {
                        sorryPopup();
                    } else {
                        statusMassage.textContent = errorMessage;
                    }
                    console.warn(error);
                });

            deleteMessage(statusMassage, 5000);
            if (form.classList.contains('popup-form')) {
                closePopupAfterSendForm(form, 5000);
            }
        });
    };

    popupForm.forEach((item) => messagePost(item));
    staticForm.forEach((item) => messagePost(item));

};
sendForm();

const slider = (sliderClass, sliderItemClass, dots, arrows, slideCount, time) => {
    const slider = document.querySelector(sliderClass),
        slide = slider.querySelectorAll(sliderItemClass);

    const createDots = () => {
        const ul = document.createElement(`ul`);
        ul.setAttribute("class", "slider-dots");
        slider.appendChild(ul);
        for (let i = 0; i < slide.length; i++) {
            const ul = slider.querySelector(`.slider-dots`),
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
        const btnPrev = document.createElement(`a`),
            btnNext = document.createElement(`a`);
        btnPrev.setAttribute("class", "slider-btn prev");
        btnPrev.setAttribute("id", "arrow-left");
        slider.appendChild(btnPrev);

        btnNext.setAttribute("class", "slider-btn next");
        btnNext.setAttribute("id", "arrow-right");
        slider.appendChild(btnNext);
    };

    if (dots) {
        createDots();
    }
    if (arrows) {
        createArrows();
    }

    const dot = slider.querySelectorAll(`.dot`);

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
        prevSlide(slide, firstSlide, lastSlide, `slide-active`);
        if (dots) {
            prevSlide(dot, firstSlide, lastSlide, `dot-active`);
        }

        firstSlide++;
        lastSlide++;
        if (firstSlide >= slide.length) {
            firstSlide = 0;
        }
        
        if (slideCount > 1 && lastSlide === slide.length) {
            stopSlide();
        }

        nextSlide(slide, firstSlide, lastSlide, `slide-active`);
        if (dots) {
            nextSlide(dot, firstSlide, lastSlide, `dot-active`);
        }
    };

    const startSlide = (time = 1500) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener(`click`, (event) => {
        event.preventDefault();
        let target = event.target;
        if (!target.matches('.slider-btn, .dot')) {
            return;
        }

        prevSlide(slide, firstSlide, lastSlide, `slide-active`);
        if (dots) {
            prevSlide(dot, firstSlide, lastSlide, `dot-active`);
        }

        if (target.matches(`#arrow-right`)) {
            if (slideCount > 1) {
                lastSlide++;
            }
            firstSlide++;
        } else if (target.matches(`#arrow-left`)) {
            if (slideCount > 1) {
                lastSlide--;
            }
            firstSlide--;
            lastSlide++;
        } else if (target.matches(`.dot`)) {
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
        nextSlide(slide, firstSlide, lastSlide, `slide-active`);
        if (dots) {
            nextSlide(dot, firstSlide, lastSlide, `dot-active`);
        }
    });

    slider.addEventListener(`mouseover`, (event) => {
        if (event.target.matches(`.slider-btn`) ||
            event.target.matches(`.dot`)) {
            stopSlide();
        }
    });
    
    slider.addEventListener(`mouseout`, (event) => {
        if (event.target.matches(`.slider-btn`) ||
            event.target.matches(`.dot`)) {
            startSlide();
        }
    });

    startSlide(time);
};

slider(`.main-slider`, `.slide`, true, false, 1, 5000);
slider(`.gallery-bg`, `.slide`, true, true, 1, 5000);
//caruselSlider('.services-slider', '.slide', true, 6, 5000);