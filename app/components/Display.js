'use strict'

import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'


const styles = StyleSheet.create({
  displayContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#ffffff'
  },
  displayText: {
    color: '#333',
    fontSize: 80
  },
  displayM: {
    color: '#333',
    fontSize: 20,
    position: 'absolute',
    right:  0,
    top:    0
  },
});

export default class Display extends React.Component {

  constructor(props) {
      super(props);
  }

  static propTypes = {
    value: React.PropTypes.string.isRequired,
    hasMem: React.PropTypes.bool.isRequired
  }

  render() {
    return (
      <View style={ styles.displayContainer }>
        <Text style={ styles.displayText }>{this.props.value}</Text>
        <Text numberOfLines={1} style={ styles.displayM }>{this.props.hasMem?"M":" "}</Text>
      </View>
    )
  }
};