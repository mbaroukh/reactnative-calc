

import React from 'react';
import Key from './Key';

export default class MemKey extends React.Component {

  render() {
    return (
        <Key {...this.props} halfSized={true} />
    )
  }

};
