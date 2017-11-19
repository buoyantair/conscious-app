import * as React from 'react';
import styled from '../styled-components';

import ThemeInterface from '../interfaces/ThemeInterface';
import UserInterface from '../interfaces/UserInterface';

import UserImage from './UserImage';
import Settings from './Settings';

interface UserPanelProps {
    user: UserInterface;
    theme: ThemeInterface;
    className?: string;
}

const UserPanel: React.StatelessComponent<UserPanelProps> = (props: UserPanelProps) => {
    return (
        <div className={props.className}>
            <UserImage size={70}/>
            <h3>{props.user.name}</h3>
            <Settings/>
        </div>
    );
};

export default styled(UserPanel)`
    display: grid;
    grid-column: 1;
    grid-row: 1;
    grid-template-columns: 100px 150px 50px;
    grid-template-rows: 100px;
    align-items: center;
    justify-items: center;

    ${(props: UserPanelProps) => {
      return (`
        background: ${props.theme.colors.PLATINUM};
        color: ${props.theme.colors.RAISIN_BLACK};
        border-bottom: 2px solid ${props.theme.colors.ASH_GREY};
      `);  
    }}

    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: 100;
`;