import React from 'react'
import Redux from 'redux'

import {testReducer} from './../reducers/reducers.js'

export var config = ()=>{
  return Redux.createStore(testReducer);
}
