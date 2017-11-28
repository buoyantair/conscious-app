import ITimer from './ITimer';

export default interface ITodo {
    _id: number;
    completed: boolean;
    text: string;  
    timeElapsed: ITimer;  
}