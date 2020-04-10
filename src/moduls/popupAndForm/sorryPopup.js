'use strict';

import openingBlock from './openingBlock';
import closingBlock from './closingBlock';

const sorryPopup = () => {
    const sorry = document.querySelector('#sorry');
    const formContent = sorry.querySelector('.form-content');

    openingBlock(sorry, formContent);
    sorry.addEventListener('click', (event) => {
        closingBlock('close-btn', sorry, '.form-content', event);
    });

    sorry.style.display = 'block';
};

export default sorryPopup;