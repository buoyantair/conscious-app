import * as React from 'react';
import styled, { keyframes } from '../styled-components';

import theme from '../constants/theme';
import ITheme from '../interfaces/ITheme';
import ITodo from '../interfaces/ITodo';

const openOut =  keyframes`
    to {
        transform: scale(1.1);
    }
`;

interface ITickMarkProps {
    className?: string;
    theme: ITheme;
    todo: ITodo;
    index: number;
    handleTick: Function;
}

interface ITickMarkState {
    
}

class TickMark extends React.Component<ITickMarkProps, ITickMarkState> {
    constructor(props: ITickMarkProps) {
        super(props);
        this.state = {
            
        };
    }

    render () {
        return (
            <div className={this.props.className}>
                <div 
                    className="dot"
                    style={{
                        background: this.props.todo.completed ? theme.colors.BLEU_DE_FRANCE : theme.colors.ASH_GREY 
                    }}
                    onClick={(e) => this.props.handleTick(e, this.props.index)}
                />
            </div>
        );
    }
}

export default styled(TickMark)`
    grid-column: 2;
    height: 30px;
    width: 30px;
    border-radius: 100%;
    border: 2px solid ${(props: ITickMarkProps) => props.theme.colors.BLEU_DE_FRANCE};

    display: grid;
    justify-items: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        animation: ${openOut} 0.1s ease-in forwards;

    }

    > .dot {
        content: '';
        height: 24px;
        width: 24px;
        border-radius: 100%;
    }
`;
