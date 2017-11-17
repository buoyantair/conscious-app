import * as React from 'react';
import styled from '../styled-components';

import ThemeInterface from '../interfaces/ThemeInterface';

import fadeInAnim from './animations/fadeInAnim';

import TickMark from './TickMark';

interface TodoProps {
    className?: string;
    theme: ThemeInterface;
}

interface TodoState {

}

class Todo extends React.Component<TodoProps, TodoState> {
    constructor(props: TodoProps) {
        super(props);
        this.state = {

        };
    }

    render () {
        return (
            <div className={this.props.className}>
                <TickMark/>
                <div className="text">
                    Todo HERE!
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
    animation: ${fadeInAnim} 0.2s forwards;
    transition: transform 0.1s;
    ${(props: TodoProps) => `
        border: 2px solid ${props.theme.colors.ASH_GREY};
        color: ${props.theme.colors.AUROMETAL_SAURUS};
    `}

    display: grid;
    align-items: center;
    grid-template-columns: 5px 40px 5px auto 10px;

    &:hover {
        cursor: pointer;
        transform: scale(0.995);
    }

    > .text {
        grid-column: 4;
        font-family: 'Roboto', sans-serif;
    }
`;