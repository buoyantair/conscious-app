import * as React from 'react';
import styled from '../styled-components';

import Popover from './Popover';
import PrimaryButton from './PrimaryButton';

interface ISettingsProps {
    className?: string;
}

interface ISettingsState {
    opened: Boolean;
}

class Settings extends React.Component<ISettingsProps, ISettingsState> {
    constructor(props: ISettingsProps) {
        super(props);
        this.state = {
            opened: false,
        };

        this.toggleSettings.bind(this);
    }

    /**
     * Toggles the opened property of this state 
     * 
     * @memberof Settings
     */
    toggleSettings() {
        this.setState({opened: !this.state.opened});
    }

    render() {
        return (
            <div className={`${this.props.className}`}>
                <div 
                    className={'ion-ios-gear settings'}
                    onClick={() => this.toggleSettings()}
                />
                
                <Popover
                    opened={this.state.opened ? true : false}
                >
                    <PrimaryButton>
                        Log me out!
                    </PrimaryButton>
                </Popover>
            </div>
        );
    }
}

export default styled(Settings)`
    > .settings {
        ${(props: any) => `
            background: ${props.theme.colors.SILVER_SAND};
            color: ${props.theme.colors.RAISIN_BLACK};
        `}
        height: 40px;
        width: 40px;
        border-radius: 5px;
        display: grid;
        justify-items: center;
        align-items: center;
        font-size: 30px;
        position: relative;

        &:hover {
            cursor: pointer;
        }
    }

    /* > .popover {
        position: absolute;
        width: 200px;
        height: 80px;
        background: #FFF;
        margin: .25em;
        display: grid;
        align-items: center;
        justify-items: center;
        box-shadow: 0px 3px 5px 1px rgba(0,0,0,0.2);
    } */
    
`;