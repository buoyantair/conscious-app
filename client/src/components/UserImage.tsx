import * as React from 'react';
import styled from '../styled-components';
import ITheme from '../interfaces/ITheme';

interface IUserImageProps {
    theme: ITheme;
    className?: string;
    size?: number;
    // src: any;
}

const UserImage: React.StatelessComponent<IUserImageProps> = (props: IUserImageProps) => {
    return (
        <div className={props.className}/>
    );
};

export default styled(UserImage)`
    display: grid;
    grid-column: 1;
    border-radius: 100%;
    ${(props: IUserImageProps) => {
      return (`
        height: ${props.size}px;
        width: ${props.size}px;
        background: ${props.theme.colors.SILVER_SAND};
        background-size: cover;
      `);  
    }}
`;  