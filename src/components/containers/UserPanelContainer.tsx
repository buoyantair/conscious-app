import * as React from 'react';

interface UserPanelContainerProps {
    className?: string;
    onClick: Function;
}

interface UserPanelContainerState {
    opened: Boolean;
}

class UserPanelContainer extends React.Component<UserPanelContainerProps, UserPanelContainerState> {
    constructor(props: UserPanelContainerProps) {
        super(props);
        this.state = {
            
        };
    }


    render() {
        return (
            <div/>
        );
    }
}

export default UserPanelContainer;