import TodoInterface from './TodoInterface';

export default interface UserInterface {
    name: string;
    email: string;
    data: {
        todos: TodoInterface[];
    };
}