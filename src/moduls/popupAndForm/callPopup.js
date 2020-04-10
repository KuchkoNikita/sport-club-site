'use strict';

import openingBlock from './openingBlock';
import closingBlock from './closingBlock';

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

export default callPopup;