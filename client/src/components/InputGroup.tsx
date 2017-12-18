/**
 * InputGroup is a presentational component.
 */

import * as React from 'react';
import styled from '../styled-components';

import ITheme from '../interfaces/ITheme';

interface IinputGroupProps {
    className?: string;
    children?: any;
    theme: ITheme;
}

interface IinputGroupState {

}

class InputGroup extends React.Component<IinputGroupProps, IinputGroupState> {
    constructor(props: IinputGroupProps) {
        super(props);
    }

    render() {
        return (
            <fieldset className={this.props.className}>
              {
                this.props.children
              }
            </fieldset>
        );
    }
}

export default styled(InputGroup)`
  border: none;
  display: grid;
  margin: 0;
  padding: 0;
  

  > label {
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 100;
    margin: 10px 0;
  }
  > input[type="text"] {
      background: ${(props: IinputGroupProps) => props.theme.colors.ALICE_BLUE};
      border: none;
      height: 50px;
      color: ${(props: IinputGroupProps) => props.theme.colors.OUTER_SPACE};
      padding: 5px;
      transform: all 0.5s;

      &:hover {
        box-shadow: 0px 2px 5px 1px rgba(0,0,0,0.1);
      }

      &:focus {
        border: 1px solid ${(props: IinputGroupProps) => props.theme.colors.BLEU_DE_FRANCE}
      }
  }
`;