import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const MainScene = () => (
  <MuiThemeProvider>
    <Main />
  </MuiThemeProvider>
);

ReactDOM.render(
  <MainScene />,
  document.getElementById('root')
);
