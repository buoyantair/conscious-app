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
            </div>
        );
    }
}

export default styled(TodoList)`
    display: grid;
    grid-column: 2/3;
    grid-row: 3/4;
    grid-template-columns: 0.05fr .9fr 0.05fr;
    grid-template-rows: 0.25fr 0.5fr;
`;