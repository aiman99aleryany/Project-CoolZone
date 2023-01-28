const pipe = (...funcs) => {
    return (value) => {
        return funcs.reduce((acc, func) => func(acc), value);
    };
};

export default pipe;
