import * as React from 'react';
import styled, { keyframes } from '../styled-components';

import ITheme from '../interfaces/ITheme';
import ITodo from '../interfaces/ITodo';
import IhandleTick from '../interfaces/IhandleTick';
import ItoggleEditTask from '../interfaces/ItoggleEditTask';
import TickMark from './TickMark';

import fadeInAnim from './animations/fadeInAnim';

interface ItodoProps {
    className?: string;
    index: number;
    theme: ITheme;
    todo: ITodo;
    handleTick: IhandleTick;
    toggleEditTask: ItoggleEditTask; 
    toggleTimer: any;
}

interface ItodoState {
    hovered: boolean;
    // interval: any;
    // secs: number;
    // records: any;
    // ticking: boolean;
}

function padNumber(n: any) {
    return n < 10 ? `0${n}` : n;  
}
  
function normalize(n: any) {
    return n > 59 ? n % 60 : n;
}
  
function deriveTime(secs: any) {
    let hours = Math.floor(secs / 3600);
    let mins = Math.floor((secs % 3600) / 60);
  
    return {
      hours, mins, secs
    };
}

const pushInAnim = keyframes`
    0% {
        left: 100px;
        opacity: 0;
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        left: 0px;
        opacity: 1;
    }
`;

interface Itoggle {
    (prop: any): void;
}

class Todo extends React.Component<ItodoProps, ItodoState> {
    toggle: Itoggle = (prop: any) => {
        this.setState({[prop]: !this.state[prop]});
    }
    
    constructor(props: ItodoProps) {
        super(props);
        this.state = {
            hovered: false,
        };
    }

    render () {
        let { hours, mins, secs } = deriveTime(this.props.todo.timeElapsed);
        let time = `${padNumber(normalize(hours))}:${padNumber(normalize(mins))}:${padNumber(normalize(secs))}`;
        return (
            <div 
                className={this.props.className}
                onMouseEnter={() => this.toggle('hovered')}
                onMouseLeave={() => this.toggle('hovered')}
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
                    <i 
                        className={`control ${ this.props.todo.ticking ? 'ion-pause' : 'ion-play'}`}
                        onClick={() => this.props.toggleTimer(this.props.index)}
                    />
                    <i className="label">
                        {
                            time
                        }
                    </i>
                </div>
                <div
                    className="todo-settings"
                    onClick={(e) => this.props.toggleEditTask(this.props.todo)}
                >
                    <i
                        className="ion-ios-gear settings"
                        style={{
                            animation: this.state.hovered ? `${pushInAnim} 0.25s forwards` : ''
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
    animation: ${fadeInAnim} ${(props: ItodoProps) => {
        let time = 0.2 * props.index * 4;
        return time > 2 ? 2 : time;
    }}s forwards;
    transition: transform 0.1s;
    ${(props: ItodoProps) => `
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
        grid-gap: 10px;
        height: 40px;
        
        > .control {
            grid-column: 1;
            text-align: right;
            transition: : all 0.5s;
            &:hover {
                cursor: pointer;
                color: ${(props: ItodoProps) => props.theme.colors.RAISIN_BLACK };
            }
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
        transition: all 0.5s;
        
        &:hover {
            color: ${(props: ItodoProps) => props.theme.colors.RAISIN_BLACK };
            cursor: pointer;
        }

        > i {
            position: relative;
            left: 100px;
        }
    }
`;