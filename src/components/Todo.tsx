import * as React from 'react';
import styled, { keyframes } from '../styled-components';

import ITheme from '../interfaces/ITheme';
import ITodo from '../interfaces/ITodo';
import fadeInAnim from './animations/fadeInAnim';

import TickMark from './TickMark';

interface ITodoProps {
    className?: string;
    index: number;
    theme: ITheme;
    todo: ITodo;
    handleTick: Function;
}

interface ITodoState {
    hovered: Boolean;
}

const pushInAnim = keyframes`
    from {
        left: 100px;
    }
    to {
        left: 0px;
    }
`;

interface ItoggleHover {
    (): void;
}

class Todo extends React.Component<ITodoProps, ITodoState> {
    toggleHover: ItoggleHover = function (this: Todo) {
        this.setState({hovered: !this.state.hovered});
    };
    
    constructor(props: ITodoProps) {
        super(props);
        this.state = {
            hovered: false,
        };

        this.toggleHover = this.toggleHover.bind(this);
    }

    render () {
        return (
            <div 
                className={this.props.className}
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}
                // style={{
                //     cursor: this.state.hovered ? 'pointer' : 'initial'
                // }}
            >
                <TickMark 
                    todo={this.props.todo}
                    index={this.props.index}
                    handleTick={this.props.handleTick}
                />
                <div className="text">
                    {this.props.todo.text}
                </div>
                <div className="timer">
                    <div className="control">
                        control
                    </div>
                    <div className="label">
                        label
                    </div>
                </div>
                <div
                    className="todo-settings"
                    // onClick={(e) => this.props.deleteTask(this.props.todo)}
                >
                    <i
                        className="ion-trash-b"
                        style={{
                            animation: this.state.hovered ? `${pushInAnim} 0.15s forwards` : ''
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default styled(Todo)`
    grid-column: 2;
    border: 3px solid grey;
    border-radius: 5px;
    font-size: 20px;
    padding: 10px;
    animation: ${fadeInAnim} ${(props: ITodoProps) => {
        let time = 0.2 * props.index * 4;
        return time > 2 ? 2 : time;
    }}s forwards;
    transition: transform 0.1s;
    ${(props: ITodoProps) => `
        border: 2px solid ${props.theme.colors.ASH_GREY};
        color: ${props.theme.colors.AUROMETAL_SAURUS};
    `}
    

    overflow: hidden;

    display: grid;
    align-items: center;
    grid-template-columns: 5px 40px 5px auto 5px 240px 40px 10px;

    &:hover {
        transform: scale(0.995);
    }

    > .text {
        grid-column: 4;
        font-family: 'Roboto', sans-serif;
    }

    > .timer {
        grid-column: 6;
        display: grid;
        grid-template-columns: 120px 120px;
        align-items: center;
        width: 240px;
        height: 40px;
        
        > .control {
            grid-column: 1;
        }

        > .label {
            grid-column: 2;
        }
    }

    > .todo-settings {
        grid-column: 7;
        display: grid;
        align-items: center;
        justify-items: center;
        height: 40px;
        width: 40px;
        
        &:hover {
            color: ${(props: ITodoProps) => props.theme.colors.CO_RED };
            cursor: pointer;
        }

        > i {
            position: relative;
            left: 100px;
        }
    }
`;