// use this function with spreading or when an Object/array has inner arrays/objects, because inner
// arrays and inner objects gets mutated
// usage: const newObj = { ...noMutate(someObject) }
// usage: const newArr = [...oldArr, noMutate(newItem)]
const noMutate = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};

export default noMutate;
