'use strict';

const menuBlock = () => {
    const topMenu = document.querySelector('.top-menu');


    window.addEventListener('scroll', function () {
        if (document.body.clientWidth < 767) {
            if (window.pageYOffset >= 188) {
                topMenu.classList.add('active-menu-block');
            } else {
                topMenu.classList.remove('active-menu-block');
            }
        } else {
            if (topMenu.classList.contains('active-menu-block')) {
                topMenu.classList.remove('active-menu-block');
            }
        }
    });
};

export default menuBlock;