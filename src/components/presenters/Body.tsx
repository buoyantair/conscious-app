import * as React from 'react';
import styled from '../../styled-components';

interface BodyProps {
    className?: string;
    children?: any;
}

const BodyProps: React.StatelessComponent<BodyProps> = (props: BodyProps) => {
    return (
        <div className={props.className}>
            {props.children};
        </div>
    );
};

export default styled(BodyProps)`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    min-height: 94vh;
`;