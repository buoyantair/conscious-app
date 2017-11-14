import * as React from 'react';
import styled from '../styled-components';

import ThemeInterface from '../interfaces/ThemeInterface';

interface TodoInputState {

}

interface TodoInputProps {
    className?: string;
    theme: ThemeInterface;
}

class TodoInput extends React.Component<TodoInputProps, TodoInputState> {
    constructor(props: TodoInputProps) {
        super(props);
        this.state = {
            
        };
    }

    render () {
        return (
          <form className={this.props.className}>
                <label htmlFor="todo">Enter your task</label>
                <input type="text" placeholder="Send flowers to Marie"/>
          </form>  
        );
    }
}

export default styled(TodoInput)`
    display: grid;
    grid-column: 2/3;
    grid-row: 2/3;
    border: none;
    font-family: 'Roboto', sans-serif;
    grid-template-columns: 0.05fr .9fr 0.05fr;
    grid-template-rows: 0.25fr 0.5fr;
    ${(props: TodoInputProps) => `border-bottom: 2px solid ${props.theme.colors.ASH_GREY};`}
    > label {
        grid-column: 2/3;
        font-size: 20px;
        ${(props: TodoInputProps) => `color: ${props.theme.colors.SPACE_CADET}`}
    }
    > input {
        grid-column: 2/3;
        border: 3px solid grey;
        border-radius: 5px;
        padding: 10px;
        font-size: 20px;
        ${(props: TodoInputProps) => `
            border: 2px solid ${props.theme.colors.ASH_GREY};
            color: ${props.theme.colors.AUROMETAL_SAURUS};
        `}
    }
`;