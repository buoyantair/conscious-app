import * as React from 'react';
import styled from '../styled-components';

import ThemeInterface from '../interfaces/ThemeInterface';

interface HeaderProps {
    theme?: ThemeInterface;
    className?: string;
    children?: any;
}

const Header: React.StatelessComponent<HeaderProps> = (props: HeaderProps) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
};

export default styled(Header)`
    display: grid;
    margin: 0px;
    padding: 0px;
    grid-template-columns: .01fr 1fr .01fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: left;
    color: #FFF;
    height: 6vh;
    max-width: 100%;
    background: ${(props: any) => props.theme.colors.BLEU_DE_FRANCE};
    > h1 {
        margin: 0px;
        padding: 0px;
        grid-row: 1/2;
        grid-column: 2/3;
        justify-self: left;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
    }
`;