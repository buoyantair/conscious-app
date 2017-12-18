import * as React from 'react';
import styled from '../styled-components';

import ITheme from '../interfaces/ITheme';

interface ITodoContainerProps {
    className?: string;
    theme?: ITheme;
    children?: any;
}

const TodoContainer: React.StatelessComponent<ITodoContainerProps> = (props: ITodoContainerProps) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
};

export default styled(TodoContainer)`
    display: grid;
    grid-template-rows: 20px 125px auto 10px;
    grid-template-columns: 0.1fr 0.8fr 0.1fr;
`;