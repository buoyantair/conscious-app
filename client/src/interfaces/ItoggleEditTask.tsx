import ITodo from './ITodo';

export default interface ItoggleEditTask {
    (todo?: ITodo | undefined): any;
}