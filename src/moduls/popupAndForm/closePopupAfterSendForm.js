'use strict';

import inputСleaning from './inputСleaning';

const closePopupAfterSendForm = (form, time = 5000) => {
    const popup = form.closest('.popup');
    setTimeout(() => {
        popup.style.display = 'none';
        inputСleaning(form);
    }, time);
};

export default closePopupAfterSendForm;