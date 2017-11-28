import * as React from 'react';
import styled from '../styled-components';

import fadeInAnim from './animations/fadeInAnim';

interface IPopoverProps {
    className?: string;
    children?: any;
    opened: boolean;
    top?: any;
    left?: any;
}

class Popover extends React.Component <IPopoverProps> {
    constructor(props: IPopoverProps) {
        super(props);
    }

    render() {
        return (
            <div 
                className={this.props.className} 
            >
                {this.props.children}
            </div>
        );
    }
}

export default styled(Popover)`
    position: absolute;
    width: 200px;
    height: 80px;
    background: #FFF;
    margin: .25em;
    display: grid;
    align-items: center;
    justify-items: center;
    box-shadow: 0px 3px 5px 1px rgba(0,0,0,0.2);
    
    ${(props: IPopoverProps) => `
        display: ${props.opened ? 'grid' : 'none'};
        animation: ${props.opened ? fadeInAnim : ''} .25s;
    `}
`;  