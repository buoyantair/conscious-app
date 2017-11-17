import * as React from 'react';
import styled from '../styled-components';
import ThemeInterface from '../interfaces/ThemeInterface';

interface UserImageProps {
    theme: ThemeInterface;
    className?: string;
    size?: number;
}

const UserImage: React.StatelessComponent<UserImageProps> = (props: UserImageProps) => {
    return (
        <div className={props.className}/>
    );
};

export default styled(UserImage)`
    display: grid;
    grid-column: 1;
    border-radius: 100%;
    ${(props: UserImageProps) => {
      return (`
        height: ${props.size}px;
        width: ${props.size}px;
        background: ${props.theme.colors.SILVER_SAND};
      `);  
    }}
`;  