import * as React from 'react';
import styled from '../styled-components';

interface IBodyProps {
    className?: string;
    children?: any;
}

const Body: React.StatelessComponent<IBodyProps> = (props: IBodyProps) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
};

export default styled(Body)`
    display: grid;
    grid-template-columns: 300px minmax(100px, auto);
    grid-template-rows: minmax(100px, auto);
    min-height: 94vh;
`;