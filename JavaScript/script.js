const popup = () => {
    const inputСleaning = (block) => {
        const inputs = block.querySelectorAll('input');
        inputs.forEach((item) => {
            item.value = '';
        });
    };
    
    const openingBlock = (button, block, captureContent) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            
            let count = -20;
            block.style.display = 'block';
            captureContent.style.top = '100%';
        
            const animationBlock = () => {
                count++;
                captureContent.style.top = count+"%";
                if (count < 20) {
                    requestAnimationFrame( animationBlock );
                }
            };

            requestAnimationFrame( animationBlock );
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
        });
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
    }
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

    /*const checkType = () => {
        typeClub.forEach((item) => {
            if (item.checked) {
                subscription.club = item.value;
            }
        });
    };
    typeClub.forEach(item => {
        item.addEventListener('change', checkType);
    });

    const check = () => {
        cardType.forEach((item) => {
            if (item.checked) {
                subscription.card = item.value;
            }
        });
    };
    cardType.forEach(item => {
        item.addEventListener('change', check);
    });

    cardCheck.addEventListener('change', () => {
        subscription.licenz = cardCheck.checked;
    });
    inputCode.addEventListener('change', () => {
        subscription.code = inputCode.value;
    });
    inputName.addEventListener('change', () => {
        subscription.name = inputName.value;
    });
    inputPhone.addEventListener('change', () => {
        subscription.phone = inputPhone.value;
    });*/

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

    }

    subscriptionAssignment();
    cardOrder.addEventListener('change',() => {
        subscriptionAssignment();
        dataСounting();

        console.log(subscription);
    });

};
calculator();