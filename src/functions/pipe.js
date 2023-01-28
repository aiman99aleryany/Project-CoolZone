const pipe = (...funcs) => {
    return (value) => {
        funcs.reduce((acc, func) => func(acc), value);
    };
};

export default pipe;
