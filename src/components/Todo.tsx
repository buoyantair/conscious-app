import * as React from 'react';
import styled from '../styled-components';

import ThemeInterface from '../interfaces/ThemeInterface';

interface TodoProps {
    className?: string;
    theme: ThemeInterface;
}

interface TodoState {

}

class Todo extends React.Component<TodoProps, TodoState> {
    constructor(props: TodoProps) {
        super(props);
        this.state = {

        };
    }

    render () {
        return (
            <div className={this.props.className}>
                Todo HERE!
            </div>
        );
    }
}

export default styled(Todo)`

`;