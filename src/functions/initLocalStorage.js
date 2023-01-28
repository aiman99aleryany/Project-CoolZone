import getLocalStorage from './getLocalStorage';
import setLocalStorage from './setLocalStorage';

const initLocalStorage = (KEY) => {
    if (!KEY) {
        // TODO: remove this after development
        console.error(
            'This is not how you should use initLocalStorage function'
        );
        return;
    }
    getLocalStorage(KEY) || setLocalStorage(KEY, null);
};

export default initLocalStorage;
