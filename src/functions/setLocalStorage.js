const setLocalStorage = (KEY, value) => {
    if (!KEY && !value) {
        // TODO: remove this after development.
        console.error(
            'you are using the setLocalStorage the wrong way with the key pairs:',
            KEY,
            value
        );
        return;
    }
    localStorage.setItem(KEY, JSON.stringify(value));
};

export default setLocalStorage;
