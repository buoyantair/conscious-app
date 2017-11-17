import * as React from 'react';
import styled from '../styled-components';

import ThemeInterface from '../interfaces/ThemeInterface';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

interface TodoContainerProps {
    className?: string;
    theme?: ThemeInterface;
}

const TodoContainer: React.StatelessComponent<TodoContainerProps> = (props: TodoContainerProps) => {
    return (
        <div className={props.className}>
            <TodoInput/>
            <TodoList/>
        </div>
    );
};

export default styled(TodoContainer)`
    display: grid;
    grid-template-rows: 20px 125px auto 10px;
    grid-template-columns: 0.1fr 0.8fr 0.1fr;
`;