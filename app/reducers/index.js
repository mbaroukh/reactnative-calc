'use strict'

import keypress from './keypress'
import device from './device'
import { combineReducers } from 'redux'


const calcStore = combineReducers({
  keypress,
  device
})

export default calcStore
