import * as React from 'react';
import styled from '../styled-components';

import ITheme from '../interfaces/ITheme';

interface IbuttonProps {
  className?: string;
  theme: ITheme;
  onClick?: any;
  style?: any;
  primary?: boolean;
  type?: any;
}

interface IbuttonState {

}

class Button extends React.Component<IbuttonProps, IbuttonState> {
  constructor(props: IbuttonProps) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <button 
        onClick={this.props.onClick}
        className={this.props.className}
      >
        {this.props.children}
      </button>
    );
  }
}

export default styled(Button)`
  min-height: 60px;
  min-width: 150px;
  display: block;
  border-radius: 5px;
  transition: all 0.1s;
  ${(props: IbuttonProps) => `
    color: ${ props.primary ? '#FFF' : props.theme.colors.AUROMETAL_SAURUS };
    background: ${ props.primary ? props.theme.colors.BLEU_DE_FRANCE : '#FFF' };
    border: ${ props.primary ? 'none' : `1.5px solid ${props.theme.colors.GAINSBORO}` };
  `}

  &:hover {
    cursor: pointer;
    box-shadow: 0px 2px 5px 1px rgba(0,0,0,0.1);
    ${(props: IbuttonProps) => `
    background: ${ props.primary ? props.theme.colors.BRANDEIS_BLUE : '#FFF' };
    `}
  }
`;