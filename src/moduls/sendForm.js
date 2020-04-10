'use strict';

import thanksPopup from './popupAndForm/thanksPopup';
import sorryPopup from './popupAndForm/sorryPopup';
import deleteMessage from './popupAndForm/deleteMessage';
import closePopupAfterSendForm from './popupAndForm/closePopupAfterSendForm';

const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...';
    const loadMessage = 'Загрузка...';
    const successMessage = 'Ваша форма отправлена!';

    const popupForm = document.querySelectorAll('.popup-form');
    const staticForm = document.querySelectorAll('.static-form');

    const statusMassage = document.createElement('div');
    statusMassage.style.cssText = `font-size: 2rem; color: #fff;`;

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
            if (form.classList.contains('popup-form')) {
                form.appendChild(statusMassage);
                statusMassage.textContent = loadMessage;
            }

            let body = {};
            if (form.id === 'card_order' && form.querySelector('#price-total')) {
                body = {
                    coast: form.querySelector('#price-total').textContent
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
                        if (form.classList.contains('popup-form')) { 
                            statusMassage.textContent = successMessage; 
                        }
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

export default sendForm;