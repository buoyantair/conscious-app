export default interface ITodo {
    _id: number;
    completed: boolean;
    text: string;  
    timeElapsed: number;
    interval: any;
    ticking: boolean;  
}