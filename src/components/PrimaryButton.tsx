import * as React from 'react';
import styled from '../styled-components';

import ITheme from '../interfaces/ITheme';

interface IPrimaryButtonProps {
    theme: ITheme;
    className?: string;
    children?: any;
    // onClick: any;
}

const PrimaryButton: React.StatelessComponent<IPrimaryButtonProps> = (props: IPrimaryButtonProps) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
};

export default styled(PrimaryButton)`
    min-width: 100px;
    min-height: 40px;
    ${(props: IPrimaryButtonProps) => `
        background: ${props.theme.colors.BLEU_DE_FRANCE};
    `}
    color: #FFF;
    border-radius: 2px;
    display: grid;
    justify-items: center;
    align-items: center;
    padding: 0 10px 0 10px;
    transition: background .3s;
    &:hover {
        cursor: pointer;
        ${(props: IPrimaryButtonProps) => `
            background: ${props.theme.colors.BRANDEIS_BLUE};
        `}
    }
`;