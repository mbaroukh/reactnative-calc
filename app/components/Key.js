
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight
} from 'react-native';

let { width, height } = Dimensions.get("window");
let keyWidth = Math.min(width, height) / 6.0;
const styles = StyleSheet.create({
  container: {
    width: keyWidth,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE1D2'
  },
  text: {
    color: '#333',
    backgroundColor: 'rgba(0,0,0,0)'
  }

});

export default class Key extends React.Component {

  static defaultProps = {
      halfSized: false
  }

  static propTypes = {
    text: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
    halfSized: React.PropTypes.bool
  };

  render() {
    const { onClick, text } = this.props;
    return (
      <TouchableHighlight style={ [styles.container, {height: this.props.halfSized?keyWidth/2:keyWidth }] } underlayColor={'#cdd2e3'} onPress={() => onClick(text)}>
        <Text numberOfLines={1} style={[styles.text, {fontSize: this.props.halfSized?30:60 }]}>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }

};
