import getLocalStorage from './getLocalStorage';
import setLocalStorage from './setLocalStorage';

const initLocalStorage = (KEY) => {
    getLocalStorage(KEY) || setLocalStorage(KEY, null);
};

export default initLocalStorage;
