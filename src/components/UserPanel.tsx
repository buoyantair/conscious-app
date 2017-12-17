import * as React from 'react';
import styled from '../styled-components';

import ITheme from '../interfaces/ITheme';

import UserImage from './UserImage';
import Settings from './Settings';

interface IUserPanelProps {
    user: any;
    theme: ITheme;
    className?: string;
}

const UserPanel: React.StatelessComponent<IUserPanelProps> = (props: IUserPanelProps) => {
    return (
        <div className={props.className}>
            <UserImage size={70}/>
            <h3>{props.user.displayName}</h3>
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

    ${(props: IUserPanelProps) => {
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