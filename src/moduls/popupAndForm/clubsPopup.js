'use strict';

const clubsPopup = () => {
    const clubsBody = document.querySelector('.clubs-body');
    const clubsList = document.querySelector('.clubs-list');

    clubsList.addEventListener('click', () => {
        clubsBody.style.display = (clubsBody.style.display !== 'block') ? 'block' : 'none';
    });
};

export default clubsPopup;