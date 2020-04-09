'use strict';

const animationLinks = () => {
    const animation = (button, className, navigation = false) => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            let target = event.target;

            if (navigation) {
                if ( target.classList.contains('scroll') ) { target = event.target.firstChild; }
            } else {
                if (target.id !== className) { target = event.target.parentElement; }   
            }
    
            const blockID = target.getAttribute('href').substr(1);
            
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };
    
    const arrow = () => {
        const totop = document.querySelector('#totop');
        totop.style.display = 'none';
    
        window.addEventListener('scroll', function () {
            if (window.pageYOffset >= 700) {
                totop.style.display = 'block';
            } else {
                totop.style.display = 'none';
            }
        });

        animation(totop, 'totop', false);
    };
    arrow();
    
    const navigationAnimate = () => {
        const scroll = document.querySelectorAll('.scroll');
        scroll.forEach((item) => {
            animation(item, 'scroll', true);
        });
    };
    navigationAnimate();
};

export default animationLinks;