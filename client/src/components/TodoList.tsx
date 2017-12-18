import * as React from 'react';
import styled from '../styled-components';

import ITheme from '../interfaces/ITheme';

interface ITodoListProps {
    className?: string;
    theme: ITheme;
    children?: any;
}

interface ITodoListState {
    
}

class TodoList extends React.Component<ITodoListProps, ITodoListState> {
    constructor(props: ITodoListProps) {
        super(props);
        this.state = {

        };
    }

    render () {
        return (
            <div className={this.props.className}>
                {
                    this.props.children
                }
            </div>
        );
    }
}

export default styled(TodoList)`
    display: grid;
    grid-column: 2;
    grid-row: 3;
    grid-template-columns: 10px 1fr 10px;
    grid-auto-rows: 50px;
    grid-gap: 20px 0;
    margin-top: 20px;
    align-items: center;
`;