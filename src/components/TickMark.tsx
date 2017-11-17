import * as React from 'react';
import styled, { keyframes } from '../styled-components';

import theme from '../constants/theme';
import ThemeInterface from '../interfaces/ThemeInterface';

const openOut =  keyframes`
    to {
        transform: scale(1.1);
    }
`;

interface TickMarkProps {
    className?: string;
    theme: ThemeInterface;
}

interface TickMarkState {
    ticked: Boolean;
}

class TickMark extends React.Component<TickMarkProps, TickMarkState> {
    constructor(props: TickMarkProps) {
        super(props);
        this.state = {
            ticked: true,
        };
    }

    render () {
        return (
            <div className={this.props.className}>
                <div 
                    className="dot"
                    style={{
                        background: this.state.ticked ? theme.colors.BLEU_DE_FRANCE : theme.colors.ASH_GREY 
                    }}
                    onClick={() => this.setState({ticked: !this.state.ticked})}
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
    border: 2px solid ${(props: TickMarkProps) => props.theme.colors.BLEU_DE_FRANCE};

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
