const asyncPipe = (...funcs) => {
    return (value) => {
        funcs.reduce(async (acc, func) => await func(acc), value);
    };
};

export default asyncPipe;
