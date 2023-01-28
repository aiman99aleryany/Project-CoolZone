const getLocalStorage = (KEY) => {
    if (!KEY) {
        // TODO: remove this after development
        console.error(
            'This is not how you should use getLocalStorage function'
        );
        return;
    }

    const storageValue = JSON.parse(localStorage.getItem(KEY));
    if (!storageValue) {
        // for debugging purpose, will be deleted later.
        console.warn(KEY, "Doesn't exist in the localStorage");
    }

    return storageValue;
};

export default getLocalStorage;
