import * as React from 'react';
import styled from '../styled-components';

import ITheme from '../interfaces/ITheme';

interface IHeaderProps {
    theme?: ITheme;
    className?: string;
    children?: any;
}

const Header: React.StatelessComponent<IHeaderProps> = (props: IHeaderProps) => {
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
    grid-template-columns: 10px 100px 10px;
    grid-template-rows: 40px;
    align-items: center;
    justify-items: left;
    color: #FFF;
    max-width: 100%;
    background: ${(props: any) => props.theme.colors.BLEU_DE_FRANCE};
    > h1 {
        margin: 0px;
        padding: 0px;
        grid-row: 1;
        grid-column: 2;
        justify-self: left;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
    }
`;