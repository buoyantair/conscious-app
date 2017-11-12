import * as React from 'react';
import '../node_modules/normalize.css/normalize.css';
import './App.css';

import UserInterface from './interfaces/UserInterface';

import Header from './components/presenters/Header';
import Body from './components/presenters/Body';
import Sidebar from './components/presenters/Sidebar';
import UserPanel from './components/presenters/UserPanel';

interface AppProps {
  
}

interface AppState {
  appName: string;
  currentUser: UserInterface;
}

class App extends React.Component {
  state: AppState = {
    appName: 'Conscious',
    currentUser: {
      name: 'Raxx Alderon',
      email: 'example@example.com'
    }
  };
  
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header>
          <h1>{this.state.appName}</h1>
        </Header>
        <Body>
          <Sidebar>
            <UserPanel/>
          </Sidebar>
        </Body>
      </div>
    );
  }
}

export default App;
