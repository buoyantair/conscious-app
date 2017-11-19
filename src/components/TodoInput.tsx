import * as React from 'react';
import styled from '../styled-components';

import ThemeInterface from '../interfaces/ThemeInterface';

interface TodoInputState {
    value: string;
}

interface TodoInputProps {
    className?: string;
    theme: ThemeInterface;
    addTask: Function;
}

class TodoInput extends React.Component<TodoInputProps, TodoInputState> {
    constructor(props: TodoInputProps) {
        super(props);
        this.state = {
            value: ''
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e: any) {
        this.setState({value: e.target.value});
    }

    render () {
        return (
            <form 
                className={this.props.className}
                onSubmit={(e) => {
                    e.preventDefault();
                    this.props.addTask(this.state.value);
                    this.setState({value: ''});
                }}
            >
                <label htmlFor="todo">Enter your task</label>
                <input 
                    type="text" 
                    placeholder="Send flowers to Marie"
                    value={this.state.value}
                    onChange={this.onChange}
                />
            </form>  
        );
    }
}

export default styled(TodoInput)`
    display: grid;
    grid-column: 2;
    grid-row: 2;
    border: none;
    font-family: 'Roboto', sans-serif;
    grid-template-columns: 10px auto 10px;
    grid-template-rows: 30px 60px;
    ${(props: TodoInputProps) => `border-bottom: 2px solid ${props.theme.colors.ASH_GREY};`}
    > label {
        grid-column: 2;
        font-size: 20px;
        ${(props: TodoInputProps) => `color: ${props.theme.colors.SPACE_CADET}`}
    }
    > input {
        grid-column: 2;
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