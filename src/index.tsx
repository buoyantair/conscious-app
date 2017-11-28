import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainApp from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { ThemeProvider } from './styled-components';
import theme from './constants/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MainApp />
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
