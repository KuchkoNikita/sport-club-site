'use strict';

import inputСleaning from './inputСleaning';

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

export default staticFormClearing;