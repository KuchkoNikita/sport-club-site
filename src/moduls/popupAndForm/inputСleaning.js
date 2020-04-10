'use strict';

const inputСleaning = (block) => {
    const inputs = block.querySelectorAll('input');
    inputs.forEach((item) => {
        if (!item.classList.contains('calculator-tabs') && !item.classList.contains('type-club')) {
            item.value = '';
        }
        if (item.classList.contains('checkbox-dinamic')) {
            item.checked = false;
        }
    });
};

export default inputСleaning;