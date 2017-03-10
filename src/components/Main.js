import React, { Component } from 'react';
import {Provider} from 'react-redux'

import watch from 'redux-watch'

//store
import * as store from './../store/configStore'

//actions
import * as actions from './../actions/actions'


//components
import App from './App'


let numberSliderStore = store.config();
//watching for currentPositions changes
var w = watch(numberSliderStore.getState, 'currentPositions');

//check for a winning combination
numberSliderStore.subscribe(w((newVal, oldVal, objectPath) => {
  numberSliderStore.dispatch(actions.checkWin(newVal));
}))

class Main extends Component {
  render() {
    return(
          <Provider store={numberSliderStore}>
            <App />
          </Provider>
    );
  }
}

export default Main
