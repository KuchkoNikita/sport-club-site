'use strict';

const calculator = () => {
    const mainCalculator = document.querySelector('.main-calculator');
    if ( !mainCalculator ) return; 
    
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

export default calculator;