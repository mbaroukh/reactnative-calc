'use strict';

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

import Keypad from './components/Keypad'
import Display from './components/Display'
import calcStore from './reducers/'

let store = createStore(calcStore)

const stateToDisplayProps = (state) => {
  return {
    value: state.keypress.displayed,
    hasMem: state.keypress.mem!=0
  }
};

const stateToKeypadProps = (state) => {
  return {
    portrait: state.device.portrait
  }
};


const styles = StyleSheet.create({

  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#bbbbbb'
  }

});

export default class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  _onLayout = event => {
    let {width, height} = event.nativeEvent.layout;
    let portrait = height > width;
    console.log("DEB1: Nouveau layout : "+portrait+" / "+width+"x"+height);
    store.dispatch({
      'type': 'LAYOUT',
      'portrait': portrait
    });
  };

  render() {
    const ConnectedDisplay = connect(stateToDisplayProps)(Display)
    const ConnectedKeypad = connect(stateToKeypadProps)(Keypad)
    return (
      <Provider store={store}>
        <View style={ styles.container } onLayout={this._onLayout}>
          <ConnectedDisplay />
          <ConnectedKeypad onClick={key => store.dispatch({'type': 'KEYPRESS', 'key': key})}/>
        </View>
      </Provider>
    );
  }
}
