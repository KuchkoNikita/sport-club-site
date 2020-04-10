'use strict';

const deleteMessage = (message, time = 5000) => {
    setTimeout(() => {
        message.remove();
    }, time);
};

export default deleteMessage;