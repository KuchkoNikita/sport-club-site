'use strict';

import openingBlock from './openingBlock';
import closingBlock from './closingBlock';

const thanksPopup = () => {
    const thanks = document.querySelector('#thanks');
    const formContent = thanks.querySelector('.form-content');

    openingBlock(thanks, formContent);
    thanks.addEventListener('click', (event) => {
        closingBlock('close-btn', thanks, '.form-content', event);
    });

    thanks.style.display = 'block';

};

export default thanksPopup;