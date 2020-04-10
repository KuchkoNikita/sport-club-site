'use strict';

import inputСleaning from './inputСleaning';

const closingBlock = (button, block, captureContent, event) => {
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
};

export default closingBlock;