import { create } from 'zustand';
import noMutate from '../../functions/noMutate';
import INIT_USERS from './INIT_USERS';

const useUsers = create((set) => ({
    users: INIT_USERS,

    addUser: (newUser) => {
        return set((state) => ({
            users: [...state.users, noMutate(newUser)],
        }));
    },

    editeUser: (userId, editedUser) => {
        return set((state) => ({
            users: state.users.filter((user) => {
                return user.id === userId
                    ? { ...user, ...noMutate(editedUser) }
                    : user;
            }),
        }));
    },

    deleteUser: (userId) => {
        return set((state) => ({
            users: state.users.filter((user) => {
                return user.id !== userId;
            }),
        }));
    },
}));

export default useUsers;
