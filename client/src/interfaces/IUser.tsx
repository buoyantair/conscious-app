import ITodo from './ITodo';

export default interface IUser {
    name: string;
    email: string;
    todos: ITodo[];
}