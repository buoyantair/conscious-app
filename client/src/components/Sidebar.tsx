import * as React from 'react';
import styled from '../styled-components';

interface ISiderbarProps {
    className?: string;
    children?: any;
}

const Sidebar: React.StatelessComponent<ISiderbarProps> = (props: ISiderbarProps) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
};

export default styled(Sidebar)`
    display: grid;
    grid-template-rows: 100px 500px;
    grid-template-columns: 300px;
    grid-column: 1;
    grid-row: 1;
    background: ${(props: any) => props.theme.colors.ISABELLINE};
`;