const getLocalStorage = (KEY) => {
    const storageValue = JSON.parse(localStorage.getItem(KEY));
    if (!storageValue) {
        // for debugging purpose, will be deleted later.
        console.warn(KEY, "Doesn't exist in the localStorage");
    }

    return storageValue;
};

export default getLocalStorage;
