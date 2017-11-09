import * as React from 'react';
import '../node_modules/normalize.css/normalize.css';
import './App.css';

import Header from './components/presenters/Header';
import Body from './components/presenters/Body';
import Sidebar from './components/presenters/Sidebar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header>
          <h1>Conscious</h1>
        </Header>
        <Body>
          <Sidebar>
            Sidebar
          </Sidebar>
        </Body>
      </div>
    );
  }
}

export default App;
