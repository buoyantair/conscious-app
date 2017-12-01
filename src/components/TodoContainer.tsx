import * as React from 'react';
import styled from '../styled-components';

import ITheme from '../interfaces/ITheme';
import ITodo from '../interfaces/ITodo';
import ItoggleEditTask from '../interfaces/ItoggleEditTask';
import IaddTask from '../interfaces/IaddTask';
import IhandleTick from '../interfaces/IhandleTick';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

interface ITodoContainerProps {
    className?: string;
    theme?: ITheme;
    todos: ITodo[];
    handleTick: IhandleTick;
    addTask: IaddTask;
    toggleEditTask: ItoggleEditTask;
}

const TodoContainer: React.StatelessComponent<ITodoContainerProps> = (props: ITodoContainerProps) => {
    return (
        <div className={props.className}>
            <TodoInput
                addTask={props.addTask}
            />
            <TodoList 
                todos={props.todos}
                handleTick={props.handleTick}
                toggleEditTask={props.toggleEditTask}
            />
        </div>
    );
};

export default styled(TodoContainer)`
    display: grid;
    grid-template-rows: 20px 125px auto 10px;
    grid-template-columns: 0.1fr 0.8fr 0.1fr;
`;