'use strict';

const popupAndForm = () => {
    const inputСleaning = (block) => {
        const inputs = block.querySelectorAll('input');
        inputs.forEach((item) => {
            if (!item.classList.contains('calculator-tabs') && !item.classList.contains('type-club')) {
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

    const openingBlock = (block, captureContent) => {
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
        if (block.id === 'gift') { 
            const fixedGift = document.querySelector('.fixed-gift');
            fixedGift.style.display = 'none';
        };
    };

    const closingBlock = (button, block, captureContent, event) => {
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
    };

    thanksPopup = () => {
        const thanks = document.querySelector('#thanks');
        const formContent = thanks.querySelector('.form-content');

        openingBlock(thanks, formContent);
        thanks.addEventListener('click', (event) => {
            closingBlock('close-btn', thanks, '.form-content', event);
        });

        thanks.style.display = 'block';

    };

    sorryPopup = () => {
        const sorry = document.querySelector('#sorry');
        const formContent = sorry.querySelector('.form-content');

        openingBlock(sorry, formContent);
        sorry.addEventListener('click', (event) => {
            closingBlock('close-btn', sorry, '.form-content', event);
        });

        sorry.style.display = 'block';
    };

    const clubsPopup = () => {
        const clubsBody = document.querySelector('.clubs-body');
        const clubsList = document.querySelector('.clubs-list');

        clubsList.addEventListener('click', () => {
            clubsBody.style.display = (clubsBody.style.display !== 'block') ? 'block' : 'none';
        });
    };
    clubsPopup();

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

    const staticFormClearing = () => {
        const staticForm = document.querySelectorAll('.static-form');

        staticForm.forEach(item => {
            item.addEventListener('submit', () => {
                setTimeout(() => {
                    inputСleaning(item);
                }, 5000);
            });
        });
    };
    staticFormClearing();
    
    const callPopup = () => {
        const popupButtons = document.querySelectorAll('.open-popup');
        const popup = document.querySelectorAll('.popup');

        popupButtons.forEach((item) => {
            item.addEventListener('click', () => {
                let target = event.target;
                if (target.className === 'img-gift') { target = target.parentElement; }
                const popup = document.querySelector(target.dataset.popup);
                const formContent = popup.querySelector('.form-content');
                openingBlock(popup, formContent);
            });
        });

        popup.forEach((item) => {
            item.addEventListener(('click'), (event) => {
                if (item.id === 'gift' || item.id === 'thanks' || item.id === 'sorry') { 
                    closingBlock('close-btn', item, '.form-content', event);
                }
                else { 
                    closingBlock('close_icon', item, '.form-content', event); 
                }
            });
        });
    };
    callPopup();
};

export default popupAndForm;