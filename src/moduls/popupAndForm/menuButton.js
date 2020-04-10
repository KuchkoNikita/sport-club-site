'use strict';

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

export default menuButton;