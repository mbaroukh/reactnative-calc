'use strict';

import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Key from './Key'
import MemKey from './MemKey'

const styles = StyleSheet.create({

    keypadContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    keypadCol: {
      flex: 1
    },
    keypadItem: {
      flex: 1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
    keypadMemItem: {
      flex: 0.5,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    }

});

export default class Main extends React.Component {

  static propTypes = {
    onClick: React.PropTypes.func.isRequired,
    portrait: React.PropTypes.bool.isRequired
  };

  render() {
      let keys = this.props.portrait?
        [
            ["M+", "M-", "MR", "MC"],
            ["1", "2", "3", "/"],
            ["4", "5", "6", "*"],
            ["7", "8", "9", "-"],
            ["0", ".", "=", "+"]
        ]:
        [
            ["1", "2", "3", "/", "M+"],
            ["4", "5", "6", "*", "M-"],
            ["7", "8", "9", "-", "MR"],
            ["0", ".", "=", "+", "MC"]
        ];

    var cols = [];
    for (var ic=0; ic<keys[0].length; ic++) {
      var col = [];
      for (var ir = 0; ir < keys.length; ir++) {
        var key = keys[ir][ic];
        if (this.props.portrait && key.startsWith("M")) {
          col.push(
              <View key={key} style={ styles.keypadMemItem }>
                <MemKey text={key} onClick={this.props.onClick}/>
              </View>
          )
        } else {
          col.push(
            <View key={key} style={ styles.keypadItem }>
              <Key text={key} onClick={this.props.onClick}/>
            </View>
          )
        }
      }
      cols.push(
          <View key={ic} style={ styles.keypadCol }>
            {col}
          </View>
      )
    }

    return (
        <View style={ styles.keypadContainer }>
          {cols}
        </View>
    );
  }
}
