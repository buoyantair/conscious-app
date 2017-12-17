import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  // Route
} from 'react-router-dom';
// import styled from './styled-components';

// import Button from './components/Button';
import Header from './components/Header';
import MainApp from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { ThemeProvider } from './styled-components';
import theme from './constants/theme';

// const HomePage = (props: any) => (
//   <div className={props.className}>
//     <Button 
//       primary={true} 
//       onClick={props.signIn}
//     >
//       Login
//     </Button>
//   </div>
// );

// const StyledHomePage = styled(HomePage)`
//   width: 100%;
//   height: 93.5vh;
//   display: grid;
//   > button {
//     width: 100px;
//     align-self: center;
//     justify-self: center;
//   }
// `;

class Index extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>    
          <div>
            <Header>
              <h1>Conscious</h1>
            </Header>
            <MainApp/>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
