import * as React from 'react';
import styled from '../styled-components';

import ThemeInterface from '../interfaces/ThemeInterface';
import Todo from './Todo';

interface TodoListProps {
    className?: string;
    theme: ThemeInterface;
}

interface TodoListState {
    
}

class TodoList extends React.Component<TodoListProps, TodoListState> {
    constructor(props: TodoListProps) {
        super(props);
        this.state = {

        };
    }

    render () {
        return (
            <div className={this.props.className}>
                <Todo/>
                <Todo/>
                <Todo/>
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