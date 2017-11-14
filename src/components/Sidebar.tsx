import * as React from 'react';
import styled from '../styled-components';

interface SiderbarProps {
    className?: string;
    children?: any;
}

const Sidebar: React.StatelessComponent<SiderbarProps> = (props: SiderbarProps) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
};

export default styled(Sidebar)`
    display: grid;
    grid-template-rows: 2fr 8fr;
    grid-auto-columns: 1fr;
    grid-column: 1/2;
    grid-row: 1/2;
    background: ${(props: any) => props.theme.colors.ISABELLINE};
`;