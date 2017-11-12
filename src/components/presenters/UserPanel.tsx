import * as React from 'react';
import styled from '../../styled-components';

import ThemeInterface from '../../interfaces/ThemeInterface';

import UserImage from './UserImage';
import Settings from './Settings';

interface UserPanelProps {
    theme: ThemeInterface;
    className?: string;
}

const UserPanel: React.StatelessComponent<UserPanelProps> = (props: UserPanelProps) => {
    return (
        <div className={props.className}>
            <UserImage size={70}/>
            <h3>Raxx Alderon</h3>
            <Settings/>
        </div>
    );
};

export default styled(UserPanel)`
    display: grid;
    grid-column: 1/2;
    grid-row: 1/2;
    grid-template-columns: 2fr 3fr 2fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;

    ${(props: UserPanelProps) => {
      return (`
        background: ${props.theme.colors.PLATINUM};
        color: ${props.theme.colors.RAISIN_BLACK};
      `);  
    }}

    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: 100;
`;