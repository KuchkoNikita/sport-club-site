'use strict';

const openingBlock = (block, captureContent) => {
    let count = -20;
    block.style.display = 'block';
    captureContent.style.top = '100%';

    const animationBlock = () => {
        count++;
        captureContent.style.top = count + "%";
        if (count < 20) {
            requestAnimationFrame(animationBlock);
        }
    };
    requestAnimationFrame(animationBlock);
    if (block.id === 'gift') { 
        const fixedGift = document.querySelector('.fixed-gift');
        fixedGift.style.display = 'none';
    }
};

export default openingBlock;