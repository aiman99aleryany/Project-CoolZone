import { create } from 'zustand';
import noMutate from '../functions/noMutate';

// this is an example of the use store, but make sure you are not spreading an
// object inside an array of objects

const useStore = create((set) => ({
    examples: [],
    addExamples: (newExamples) => {
        return set((state) => ({
            examples: [...state.examples, ...noMutate(newExamples)],
        }));
    },
}));

export default useStore;
