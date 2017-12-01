import * as React from 'react';
import styled from '../styled-components';

import ITheme from '../interfaces/ITheme';
import ITodo from '../interfaces/ITodo';
import IhandleTask from '../interfaces/IhandleTick';
import ItoggleEditTask from '../interfaces/ItoggleEditTask';

import Todo from './Todo';

interface ITodoListProps {
    className?: string;
    theme: ITheme;
    todos: ITodo[];
    handleTick: IhandleTask;
    toggleEditTask: ItoggleEditTask;
}

interface ITodoListState {
    
}

class TodoList extends React.Component<ITodoListProps, ITodoListState> {
    constructor(props: ITodoListProps) {
        super(props);
        this.state = {

        };
    }

    render () {
        return (
            <div className={this.props.className}>
                {
                    this.props.todos.map((todo, i) => (
                        <Todo 
                            key={i}
                            index={i}
                            todo={todo}
                            handleTick={this.props.handleTick}
                            toggleEditTask={this.props.toggleEditTask}
                        />
                    ))
                }
            </div>
        );
    }
}

export default styled(TodoList)`
    display: grid;
    grid-column: 2;
    grid-row: 3;
    grid-template-columns: 10px 1fr 10px;
    grid-auto-rows: 50px;
    grid-gap: 20px 0;
    margin-top: 20px;
    align-items: center;
`;