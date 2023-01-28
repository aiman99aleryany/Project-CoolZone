const asyncPipe = (...funcs) => {
    return async (value) => {
        return await funcs.reduce(async (acc, func) => await func(acc), value);
    };
};

export default asyncPipe;
